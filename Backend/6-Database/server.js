/**
 * - server ko start krna
 * - database se connect krna
 */
const app = require("./src/app")
const mongoose = require("mongoose")

function connectToDb() {
    mongoose.connect("mongodb://Abhishek:HShsHjguGo374ayW@ac-le5bl64-shard-00-00.eoa4ojn.mongodb.net:27017,ac-le5bl64-shard-00-01.eoa4ojn.mongodb.net:27017,ac-le5bl64-shard-00-02.eoa4ojn.mongodb.net:27017/?ssl=true&replicaSet=atlas-s029zv-shard-0&authSource=admin&appName=Cluster0/day-6")
        .then(() => {
            console.log("Connected To Database")
        })

}
connectToDb()


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

