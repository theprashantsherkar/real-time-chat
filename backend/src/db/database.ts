import mongoose from "mongoose";

export const connectDB = async () => {
    try {

        const dbURL = process.env.MONGOOSE_URL || "mongodb://localhost:27017/";
        if (!dbURL) {
            return console.log("No URL provided");
        }
        mongoose.connect(dbURL, { dbName: "real-time-chat" })
            .then(() => {
                console.log("Database connected.");
            })
            .catch(error => console.log(error));

    } catch (error) {
        console.log(error);
    }
}