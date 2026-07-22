const express = require("express")
const authRouter = express.Router()
const userModel = require("../models/user.models")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

/**
 * registur
 */

authRouter.post("/registur", async (req, res)=>{
    const { name, email, password } = req.body

    const isUserAlreadyExist = await userModel.findOne( {  email } )

    if(isUserAlreadyExist){
        return res.status(409).json({
            message: "user already exist with this email"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        name, email, password:hash
    })

    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    )

    res.cookie("token", token)


    res.status(201).json({
        message: "user registur successfully",
        user
    })
})

/**
 * get-me
 */

authRouter.get("/get-me", async (req, res)=>{
    const token = req.cookies.token

    const decode = jwt.verify(token, process.env.JWT_SECRET)

    const user = await userModel.findById(decode.id)

    res.status(200).json({
        message: "got user successfully",
        user
    })
})

/**
 * login
 */

authRouter.post("/login", async (req, res)=>{
    const { email, password } = req.body

    const user = await userModel.findOne( { email } )
    
    if(!user){
        return res.status(409).json({
            message: "user not exist with this email"
        })
    }
    
    const hash = crypto.createHash("md5").update(password).digest("hex")
    const isPasswordCurrect = (hash === user.password)

    if(!isPasswordCurrect){
        return res.status(401).json({
            message: "user password is invalid"
        })
    }

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn : "1h"
        }
    )

    res.cookie("token", token)

    res.status(200).json({
        message: "user logged in",
        user
    })
})

module.exports = authRouter