import { stripe } from "src/clients";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const balance = await stripe.balance.retrieve();

      const charges = await stripe.charges.search({
        query: "status:'succeeded'",
      });

      const cleanCharges = charges.data.map((c) => ({
        amount: c.amount,
        status: "paid",
        date: c.created,
        currency: c.currency,
      }));

      const subscriptions = await stripe.subscriptions.search({
        query: "status:'active'",
        limit: 100,
      });

      res.status(200).json({
        payments: cleanCharges,
        supporters: subscriptions.data.length,
        balance: `${
          (balance.available[1].amount + balance.pending[1].amount) / 100
        } ${balance.available[1].currency.toUpperCase()}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default handler;
