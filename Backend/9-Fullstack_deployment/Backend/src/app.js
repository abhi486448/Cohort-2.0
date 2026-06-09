const express = require("express")
const cors = require("cors")
const path = require("path")
const noteModel = require("./models/notes.model")

const app = express()

app.use(express.json())

app.use(cors())
/**
 * - http://localhost:3000//assets/index-CMnE03Jw.js
 * - http://localhost:3000//assets/index-CgjQFQlP.css
 */
app.use(express.static("./public"))


app.post('/api/notes', async (req, res)=>{
    const {title, description} = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "note created successfully",
        note
    })
})

app.get('/api/notes', async (req, res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message: "notes fetch successfully",
        notes
    })
})

app.delete("/api/notes/:id", async (req, res)=>{
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    //204
    res.status(200).json({
        message: "note deleted successfully"
    })
})

app.patch("/api/notes/:id", async (req, res)=>{
    const id = req.params.id

    await noteModel.findByIdAndUpdate(id, {description: req.body.description})

    res.status(200).json({
        message: "note updated successfully"
    })


})


/**
 * - This is wild card
 */
app.use('*name', (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})

module.exports = app