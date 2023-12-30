const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.ATLAS_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(err) {
        console.log("Error while connecting to your Database: ", err);
        process.exit(1);
    }
};

module.exports = connectDb;