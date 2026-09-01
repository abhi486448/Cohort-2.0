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

    /* 2000 */
    /* id = 12 bytes */
    /* 12*2000 data in array */
    /* but a mongodb docment can be only of 16 mb only */
    /* it will fail when there is more user id */
    /* solution is Edge Collection */
    // followers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "users"
    // }],

    // following: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "users"
    // }],
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel