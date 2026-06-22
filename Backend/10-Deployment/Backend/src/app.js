const express = require("express")
const cors = require("cors")
const noteModel = require("./models/notes.model")
const path = require("path")

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static("./public"))

app.post('/api/notes', async (req, res)=>{
    console.log(req.body)
    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "note created successfullt",
        note
    })
})

app.get('/api/notes', async (req, res)=>{
    const notes =await noteModel.find()

    res.status(200).json({
        message: "fetched noted successfully",
        notes
    })
})

app.delete("/api/notes/:id",async (req, res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "note deleted successfully"
    })
})

app.patch("/api/notes/:id", async (req, res)=>{
    const id = req.params.id

    const { description} = req.body

    await noteModel.findByIdAndUpdate(id, { "description": description})

    res.status(200).json({
        message: "note updated successfully"
    })
})

app.use('/*name', (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})

module.exports = app