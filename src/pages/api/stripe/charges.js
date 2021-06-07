import nextConnect from "next-connect";
import { stripe } from "src/clients";
import onError from "src/utils/onError";
import status from "http-status";

const handler = nextConnect({ onError });

handler.get(async (req, res) => {
  const charges = await stripe.charges.list();
  const cleanCharges = charges.data.map((c) => ({
    amount: c.amount,
    status: c.paid ? "paid" : "",
    date: c.created,
    currency: c.currency,
  }));

  return res.status(status.OK).json({
    data: cleanCharges,
  });
});

export default handler;
