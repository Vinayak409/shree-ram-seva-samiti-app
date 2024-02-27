import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL!, {
      dbName: "loanDB",
    });
    console.log("db connected");
  } catch (error) {
    console.log("failed to connect with db");
    console.log(error);
  }
};
