const express = require("express")
const authRouter = express.Router()
const authController = require("../controller/auth.controller")
const identifyUser = require("../middlewares/auth.middleware")


/**
 * Post registur  /api/auth/register
 */

authRouter.post("/register", authController.reginserController)

/**
 * Get login  /api/auth/login
 */

authRouter.post("/login", authController.loginController)

/**
 * @route Get /api/auth/get-me
 * @desc Get the currently logged in user's information
 * @access Private
 */
authRouter.get("/get-me", identifyUser, authController.getMeController)

module.exports = authRouter