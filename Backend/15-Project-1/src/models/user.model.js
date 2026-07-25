const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        uinque: [true, "user already exist"],
        required: [true, "username requires"],
    },
    email: {
        type: String,
        unique: [true, "user email alreaedy exist"],
        required: [true, "email is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/dhfewvav1/insta_clone/img.png"
    },
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel