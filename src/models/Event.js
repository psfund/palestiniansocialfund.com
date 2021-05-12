import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    meta: { type: Schema.Types.Mixed, default: {} },
  },
  {
    minimize: false,
    timestamps: true,
    collection: "events",
  }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
