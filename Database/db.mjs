import mongoose from "mongoose";

export const connectDB = async () => mongoose.connect(process.env.DB_URL)