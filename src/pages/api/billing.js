import { stripe } from "src/clients";

async function handler(req, res) {
  if (req.method === "GET") {
    const { customerId } = req.query;

    try {
        const session = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: 'https://palestiniansocialfund.com',
        });

        res.redirect(302, session.url);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
  }
}

export default handler;
