const express = require("express")
const userRouter = express.Router()
const userController = require("../controller/user.controller")
const identifyUse = require("../middlewares/auth.middleware")

/**
 * @route POST /api/users/follow/:userid
 * @description follow a user
 * @access Private
 */
userRouter.post("/follow/:username", identifyUse ,userController.followUserController)

/**
 * @route Post /api/users/unfollow/:username
 * @description Unfollow a user
 * @access Private
 */
userRouter.post("/unfollow/:username", identifyUse, userController.unfollowUserController)

module.exports = userRouter