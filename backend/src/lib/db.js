import mongoose from "mongoose";

export const connectDB = async () => {

    const connectEnv = process.env.MONGODB_URI;

    try {
       const connect =  await mongoose.connect(connectEnv);
       console.log(`Connected to MongoDB ${connect.connection.host}`);
    } catch (error) {
        console.log("Failed to connec to MOngoDB", error);
        process.exit(1);
    }
}