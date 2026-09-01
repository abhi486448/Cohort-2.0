const mongoose = require('mongoose')

const followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require:[true, "Follower is require"],
    },

    followee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require:[true, "Followee is require"],
    },

},{
    timestamps: true
})

const followModel = mongoose.model('follows', followSchema)

module.exports = followModel