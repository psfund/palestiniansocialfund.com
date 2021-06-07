import nextConnect from "next-connect";
import { stripe } from "src/clients";
import onError from "src/utils/onError";
import status from "http-status";

const handler = nextConnect({ onError });

handler.get(async (req, res) => {
  const balance = await stripe.balance.retrieve();
  delete balance.available[0].source_types;

  return res.status(status.OK).json({
    data: balance.available[0],
  });
});

export default handler;
