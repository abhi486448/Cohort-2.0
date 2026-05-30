const express = require("express")

const app = express();

app.get('/', (req,res) => {
    res.send("Hello world")
})

app.get('/about', function(req, res){
    res.send("This is About")
})

app.get('/home', (req, res) => {
    res.send("This is Home Page")
})

app.listen(3000)