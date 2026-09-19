const express = require("express")
const postRouter = express.Router()
const postController = require("../controller/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUse = require("../middlewares/auth.middleware")


/**
 * @route POST /api/post [protected]
 * @description Create a post with the content and image (optional) provided in the req.body = { caption, image-file }
 */

postRouter.post("/", upload.single("image"), identifyUse ,postController.createPostController)

/**
 * @route GET /api/post/ [protected]
 * @description Get all the posts created by the user that the request come from.
 */

postRouter.get("/", identifyUse, postController.getPostController)

/**
 * @route GET /api/posts/details/:postid
 * @description return an detail about specofic post with the id. also check wether the post belongs to the user that the request come from
 */

postRouter.get("/details/:postId", identifyUse, postController.getPostDetailsController)

/**
 * @route POST /api/posts/like/:postid
 * @description like a post with the id provided in the request params.
 */
postRouter.post("/like/:postid",identifyUse, postController.likePostController)
module.exports = postRouter