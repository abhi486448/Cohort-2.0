const express = require("express")
const userRouter = express.Router()
const userController = require("../controller/user.controller")
const identifyUser = require("../middlewares/auth.middleware")

/**
 * @route POST /api/users/follow/:userid
 * @description follow a user
 * @access Private
 */
userRouter.post("/follow/:username", identifyUser ,userController.followUserController)

/**
 * @route Post /api/users/unfollow/:username
 * @description Unfollow a user
 * @access Private
 */
userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController)

/**
 * @route GET /api/users/followRiquiests
 * @description fetch all fallow requests
 * @access Private
 */
userRouter.get("/requests", identifyUser, userController.getRequestsUserController)

/**
 * @route POST /api/user/updateRequest
 * @description update status of request to [pending, accepted, rejected]
 * @access Private
 */
userRouter.post("/updateRequest/:requestid",identifyUser, userController.updateRequestUserController)

module.exports = userRouter