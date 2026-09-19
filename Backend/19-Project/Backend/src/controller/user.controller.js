const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")

async function followUserController(req, res){
    const followerUsername = req.user.username
    const followeeUsername =  req.params.username

    if(followerUsername == followeeUsername){
        return res.status(400).json({
            message: "You can not follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username: followeeUsername
    })

    if(!isFolloweeExists){
        return res.status(404).json({
            message: "User you are trying to follow does not exist"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if(isAlreadyFollowing){
        return res.status(200).json({
            message: `You already follow ${followeeUsername}`,
            follow: isAlreadyFollowing
        })
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    })

    res.status(201).json({
        message: `You are now following ${followeeUsername}`,
        follow: followRecord
    })
}

async function unfollowUserController(req, res){
    const followerUsername =  req.user.username
    const followeeUsername =  req.params.username

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}

async function getRequestsUserController(req, res){
    const username = req.user.username;

    const Requests = await followModel.find(
        {
            followee: username,
        }
    )

    if(Requests.length == 0){
        return res.status(200).json({
            message: "You have no requests"
        })
    }

    res.status(200).json({
        message: "fetched all requests",
        Requests,
    })
}

async function updateRequestUserController(req, res){
    const username = req.user.username;
    const requestid = req.params.requestid;
    const {status} = req.body;

    const checkStatus = await followModel.findById(requestid)

    if(checkStatus.status != "pending"){
        return res.status(200).json({
            message: "request is already resolved"
        })
    }

    const requestdata = await followModel.findByIdAndUpdate(
        requestid,
        {
            status : status,
        },
        {
            returnDocument: 'after',
            runValidators: true,
        }
    )


    res.status(200).json({
        message: "status updated successfully",
        requestdata,
        username
    })

}

module.exports = {
    followUserController,
    unfollowUserController,
    getRequestsUserController,
    updateRequestUserController,
}