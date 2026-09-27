const mongoose = require("mongoose")

async function connectToDB(){
    await mongoose.connect(process.env.MONGO_URI)

    console.log("Connected to DataBase")
}

module.exports = connectToDB