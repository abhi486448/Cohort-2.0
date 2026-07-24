const userModel = require("../models/user.models")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

async function reginserController(req, res) {
    const { username, email, password, bio, profileImage } = req.body

    // const isUserExistByEmail = await userModel.findOne( { email } )

    // if(isUserExistByEmail){
    //     return res.status(409).json({
    //         message: "useralready exist with this email"
    //     })
    // }

    // const isUserExistByUsername = await userModel.findOne( { username } )

    // if(isUserExistByUsername){
    //     return res.status(409).json({
    //         message: "user already exist with this username"
    //     })
    // }

    const isUserExist = await userModel.findOne( {
        $or: [
            { email },
            { username }
        ]
    } )

    if(isUserExist){
        return res.status(409).json({
            message: "user already exist" +( isUserExist.email == email ? " with this email" : " with same username")
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")

    const user = await userModel.create({
        username,
        email,
        password:hash,
        bio,
        profileImage
    })

    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1d'
        }
    )

    res.cookie("token", token)

    res.status(201).json({
        message: "user created successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage,
        }
    })
}

async function loginController(req, res) {

    /**
     * username
     * password
     * 
     * email
     * password
     */

    const {username, email, password } = req.body

    const user = await userModel.findOne({
        $or: [
            {
                username: username,
            },
            {
                email: email,
            }
        ]
    })

    if(!user){
        return res.status(409).json({
            message: "user not exist with this email"
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")

    const isCurrectPassword = hash === user.password

    if(!isCurrectPassword){
        return res.status(401).json({
            message: "invalid user password"
        })
    }

    const token = jwt.sign(
        {
            id:  user._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d"}
    )

    res.cookie("token", token)

    res.status(200).json({
        message: "user logged in",
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}

module.exports = {
    reginserController,
    loginController
}