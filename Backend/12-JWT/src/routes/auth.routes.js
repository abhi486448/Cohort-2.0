const express = require("express")
const userModel = require("../models/users.model")
const jwt = require("jsonwebtoken")
const authRoute = express.Router();

/**
 *  /api/auth/register
 */

authRoute.post("/register", async (req, res)=>{
    const { name, email, password } = req.body

    const isUserAlreadyExist = await userModel.findOne( { email } )

    if(isUserAlreadyExist){
        return res.status(409).json({
            message: "User already exist with this email adress"
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    const Token = jwt.sign(
        {
            id: user._id,
            email: user.email,
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", Token)

    res.status(201).json({
        message: "user registered",
        user,
        Token
    })
    
    
})

module.exports = authRoute