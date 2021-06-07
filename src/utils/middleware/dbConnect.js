import mongoose from "mongoose";

const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: 300000,
  connectTimeoutMS: 30000,
};

async function dbConnect() {
  if (!mongoose.connection.readyState) {
    console.log(process.env.DB_URI)
    await mongoose.connect(process.env.DB_URI, dbOptions);
    console.log("Connected to:", process.env.DB_URI);
  }
}

export default dbConnect;
