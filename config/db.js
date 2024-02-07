const mongoose = require('mongoose');
const dontenv = require('dotenv');

dontenv.config();

const DB_URI = process.env.DB_URI;

const db = async () => {
    try {
        const connect = await mongoose.connect(DB_URI);
        console.log("Connected to Mongo Db")
    } catch (error) {
        console.error(error);
    }
}

module.exports = db;