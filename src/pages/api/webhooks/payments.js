import { stripe } from "src/clients";
import { Payment } from "src/models";
import httpstatus from "http-status";
import dbConnect from "src/utils/middleware/dbConnect";

dbConnect();

export default async function payments(req, res){
    const { type } = req.body;
    if(req.method == "POST"){
        if(type == "payment_intent.succeeded"){
            // Strip from PaymentIntent object
            const { status, id, currency, amount } = req.body.data.object;
            // Get BalanceTransaction ID from charges
            const balanceTransactionId = req.body.data.object.charges.data[0].balance_transaction;
    
            try {
                // Processing fee must be requested from BalanceTransaction Object
                const balanceTransaction = await stripe.balanceTransactions.retrieve(
                    balanceTransactionId
                );
                
                const newPayment = {
                    status,
                    currency,
                    amount,
                    ref: id,
                    processor: "stripe",
                    fees: {
                        processing: balanceTransaction.fee
                    }
                }
                
                Payment.create(newPayment);
                res.status(httpstatus.OK).send();
            } catch (err) {
                res.status(httpstatus.INTERNAL_SERVER_ERROR).json({
                    message: "Something went wrong while trying to process payment!"
                });
            }
        } else {
            res.status(httpstatus.NO_CONTENT).send();
        }
    } else {
        res.status(httpstatus.BAD_REQUEST).send();
    }
    
}