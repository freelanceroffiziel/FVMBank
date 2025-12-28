const mongoose = require("mongoose");

const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`DB connected successfully`);
    } catch (error) {
        console.error("Error" + error.message);
        throw new Error("Issues occured while connecting to the database");
    }
};

module.exports = connectdb;