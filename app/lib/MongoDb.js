import mongoose from "mongoose";
import dns from "node:dns";

const MONGODB_URI = process.env.MONGODB_URI ;
const MONGODB_DB = process.env.MONGODB_DB ;

if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI (or NEXT_PUBLIC_MONGO_URI) in your environment");
}

if (!MONGODB_DB) {
    throw new Error("Please define MONGODB_DB (or NEXT_DATABASE_NAME) in your environment");
}

let isConnected = false;

const connectWithOptions = () =>
    mongoose.connect(MONGODB_URI, {
        dbName: MONGODB_DB,
        serverSelectionTimeoutMS: 10000,
        family: 4,
    });

export const connectDB = async () => {
    if (isConnected && mongoose.connection.readyState === 1) {

        return mongoose.connection;
    }

    try {
        let conn;

        try {
            conn = await connectWithOptions();
        } catch (error) {
            const message = error instanceof Error ? error.message : "";
            const isSrvDnsError = message.includes("querySrv ECONNREFUSED");

            if (!isSrvDnsError) {
                throw error;
            }

            dns.setServers(["8.8.8.8", "1.1.1.1"]);
            conn = await connectWithOptions();
        }

        isConnected = conn.connections[0].readyState === 1;

        console.log("✅ MongoDB connected");

        return mongoose.connection;

    } catch (error) {
        console.error("❌ MongoDB connection failed", error);
        throw error;
    }
};
