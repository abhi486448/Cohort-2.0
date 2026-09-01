const express = require("express")
const postRouter = express.Router()
const postController = require("../controller/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUse = require("../middlewares/auth.middleware")


/**
 * /api/post [protected]
 * - req.body = { caption, image-file }
 */

postRouter.post("/", upload.single("image"), identifyUse ,postController.createPostController)

/**
 *  /api/post/ [protected]
 */

postRouter.get("/", identifyUse, postController.getPostController)

/**
 * Get /api/posts/details/:postid
 * - return an detail about specofic post with the id. also check wether the post belongs to the user that the request come from
 */

postRouter.get("/details/:postId", identifyUse, postController.getPostDetailsController)

module.exports = postRouter