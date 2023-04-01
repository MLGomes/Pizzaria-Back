const mongoose = require('mongoose');
require('dotenv').config();

async function StartDB(){
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@pizzaria.oqul2a5.mongodb.net/test`);
}

module.exports = StartDB;