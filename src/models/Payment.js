import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PaymentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    status: { type: String, require: true },
    ref: { type: String, required: true }, // e.x. stripe's charge_id
    currency: { type: String, required: true},
    processor: { type: String, required: true }, // e.x. "stripe"
    amount: { type: Number, required: true },
    fees: {
      processing: { type: Number, required: true },
    },
  },
  {
    minimize: false,
    timestamps: true,
    collection: "payments",
  }
);

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);
