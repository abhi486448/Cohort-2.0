const express = require("express")
const authRouter = express.Router()
const authController = require("../controller/auth.controller")


/**
 * Post registur  /api/auth/register
 */

authRouter.post("/register", authController.reginserController)

/**
 * Get login  /api/auth/login
 */

authRouter.post("/login", authController.loginController)

module.exports = authRouter