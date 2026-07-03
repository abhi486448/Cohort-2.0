const express = require("express")
const userModel = require("../models/users.model")
const jwt = require("jsonwebtoken")
const authRoute = express.Router();
const crypto = require("crypto")

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

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        email, password: hash, name
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

/**
 *  /api/auth/register
 */

authRoute.post("/protected", (req, res)=>{
    console.log(req.cookies)

    res.status(200).json({
        message: "cookies are console"
    })
})

/**
 *  /api/auth/login
 */

/**
 *  controler
 */

authRoute.post("/login", async (req, res)=>{

    const {email, password} = req.body

    const user = await userModel.findOne( { email } )

    if(!user){
        return res.status(404).json({
            message: "User not found with this email adress"
        })
    }

    const isPasswordCorrect = user.password === crypto.createHash("md5").update(password).digest("hex")

    if(!isPasswordCorrect){
        return res.status(401).json({
            message: "Password is incorrect"
        })
    }

    const Token = await jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET
    )

    res.status(200).json({
        message: "User logedin",
        user
    })

})

module.exports = authRoute