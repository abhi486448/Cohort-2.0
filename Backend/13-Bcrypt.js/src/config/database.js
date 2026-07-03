const mongoode = require("mongoose")

function connectToDb(){
    mongoode.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("connected to DB")
        })
}

module.exports = connectToDb