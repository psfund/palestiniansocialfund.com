import nextConnect from "next-connect";
import { stripe } from "src/clients";
import onError from "src/utils/onError";
import status from "http-status";

const handler = nextConnect({ onError });

handler.get(async (req, res) => {
  const subscriptions = await stripe.subscriptions.list();

  return res.status(status.OK).json({
    data: subscriptions.data.length,
  });
});

export default handler;
