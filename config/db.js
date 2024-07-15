import mongoose from "mongoose";

let connected = false;

export default async function connectDB() {
  // Only the fields that are specified in our schema will be saved in our database.
  mongoose.set("strictQuery", true);

  // If the database is already connected, don't connect again.
  if (connected) {
    console.log("MongoDB is already connected...");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
}