const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://ajaysaini:ajaysaini@sahyog.2z6va4e.mongodb.net/sahyog";

const connectDB = async() => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
        console.log()
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;