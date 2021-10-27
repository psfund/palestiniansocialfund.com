import { stripe, airtable } from "src/clients";
import moment from "moment";
import { buffer } from "micro";

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const handlePaymentIntentSucceeded = async (paymentIntent) => {
  let supporter;
  let plan;
  let subscription;

  // find supporter
  const supporters = await airtable.select("supporters", {
    filterByFormula: `{email} = '${paymentIntent.receipt_email}'`,
  });

  supporter = supporters[0];

  // create supporter if it doesn't exist
  if (!supporter) {
    const customer = await stripe.customers.retrieve(paymentIntent.customer);

    supporter = await airtable.createRecord("supporters", {
      name: customer.name,
      email: customer.email,
    });
  }

  // find subscription & plan if it's a recurring payment
  if (paymentIntent.price) {
    const subscriptions = await airtable.select("subscriptions", {
      filterByFormula: `{subscription_id} = '${paymentIntent.subscription}'`,
    });
    const plans = await airtable.select("plans", {
      filterByFormula: `{price_id} = '${paymentIntent.price}'`,
    });

    subscription = subscriptions[0];
    plan = plans[0];
  }

  // create subscription if it doesn't exist
  if (!subscription && paymentIntent.subscription) {
    subscription = await airtable.createRecord("subscriptions", {
      status: "active",
      supporter: [supporter.id],
      subscription_id: paymentIntent.subscription,
    });
  }

  const payment = await airtable.createRecord("payments", {
    amount: paymentIntent.amount / 100,
    fee: paymentIntent.fee / 100,
    status: "paid",
    type: paymentIntent.invoice ? "recurring" : "one-time",
    charge_id: paymentIntent.charge,
    supporter: [supporter.id],
    subscription: subscription ? [subscription.id] : [],
    plan: plan ? [plan.id] : [],
    created: moment.unix(paymentIntent.created).format("YYYY-MM-DD"),
  });

  console.log(`Payment ${payment.id} succeeded.`);
};

async function handler(req, res) {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        process.env.STRIPE_WEBHOOK_SIGNING_SECRET
      );
      console.log(event);
    } catch (err) {
      // On error, log and return the error message.
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "charge.succeeded": {
        const charge = event.data.object;

        const balanceTransaction = await stripe.balanceTransactions.retrieve(
          charge.balance_transaction
        );
        const paymentIntent = await stripe.paymentIntents.retrieve(
          charge.payment_intent
        );

        let subscription;
        let price;

        if (paymentIntent.invoice) {
          const invoice = await stripe.invoices.retrieve(paymentIntent.invoice);
          subscription = await stripe.subscriptions.retrieve(
            invoice.subscription
          );
          price = subscription.items.data[0].price;
        }

        await handlePaymentIntentSucceeded({
          ...paymentIntent,
          charge: charge.id,
          fee: balanceTransaction.fee,
          subscription: subscription?.id,
          price: price?.id,
        });

        break;
      }
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }

    // Return a 200 response to acknowledge receipt of the event
    res.json({ received: true });
  }
}

export default handler;
