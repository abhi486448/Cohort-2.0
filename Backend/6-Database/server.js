/**
 * - server ko start krna
 * - database se connect krna
 */
const app = require("./src/app")
const mongoose = require("mongoose")

function connectToDb() {
    mongoose.connect("mongodb://localhost:27017/day-6")
        .then(() => {
            console.log("Connected To Database")
        })
}

connectToDb()

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})