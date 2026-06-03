/**
 * - create server
 */

const express = require("express")
const { default: mongoose } = require("mongoose")
const noteModel = require("./models/notes.model")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

/**
 * - POST /api/notes
 * - create new note anse save data in mongodb
 * - req.body = {title, description}
 */

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

/**
 * - GET /api/notes
 * - Fetch all the notes data from mongodb snd send them in the responce
 */

app.get('/api/notes', async (req, res)=>{
    const notes = await noteModel.find()

    /**
     * - find() matherd return data in the form of array of objects
     */

    res.status(200).json({
        message: "Notes fetched successfully.",
        notes
    })
})

/**
 * - DELETE /api/notes/:id
 * - Delete note with the id from req.params
 */

app.delete("/api/notes/:id", async (req, res)=>{
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(204).json({
        message: "Note deleted successfully"
    })
})

/**
 * - PATCH /api/notes/:id
 * - update the description of the note by id
 * - req.body = {description}
 */

app.patch("/api/notes/:id", async (req, res)=>{
    const id = req.params.id

    const {description} = req.body

    await noteModel.findByIdAndUpdate(id, { description})

    res.status(200).json({
        message: "Description updated successfully"
    })
})

module.exports = app