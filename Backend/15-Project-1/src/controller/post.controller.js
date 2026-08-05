const postModel = require("../models/post.model")
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")
const { default: mongoose } = require("mongoose")

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req, res) {
    // console.log(req.body, req.file)

    const { caption } = req.body

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: "token not provided, unauthorized access"
        })
    }

    let decoded = null;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({
            message: "User not authorized"
        })
    }

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: 'Test',
        folder: 'insta_clone/posts',
    });


    const post = await postModel.create({
        caption,
        imageUrl: file.url,
        user: decoded.id,
    })

    res.status(201).json({
        message: "post created successfully",
        post
    })

}

module.exports = {
    createPostController
}