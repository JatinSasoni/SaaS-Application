import { mongoose } from "mongoose";

export const connectToDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connected with database");
  }
};
