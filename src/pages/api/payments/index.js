import dbConnect from "src/utils/middleware/dbConnect";
import httpstatus from "http-status";
import { Payment } from "src/models";

dbConnect();

export default async function payments(req, res){
    if(req.method == "GET") {
        const payments = await Payment.find().exec();
        console.log(payments);
        res.status(httpstatus.OK).json(payments);
    } else {
        req.status(httpstatus)
    }
}