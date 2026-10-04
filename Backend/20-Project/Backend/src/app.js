const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")


const app = express()

const allowedOrigins = (process.env.FRONTEND_URL || "")
    .split(",")
    .map((origin) => origin.trim().replace(/\/$/, ""))
    .filter(Boolean)

// Allow only preview deployments under this Vercel project scope.
const vercelPreviewOrigin = /^https:\/\/instaclone-[a-z0-9-]+-abhishek-gupta-s-projects-80a4c2ac\.vercel\.app$/i

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin(origin, callback) {
        callback(
            null,
            !origin || allowedOrigins.includes(origin) || vercelPreviewOrigin.test(origin)
        )
    },
}))

// require routers
const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.routes")
const userRouter = require("./routes/user.routes")

// use routers
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/users", userRouter)

module.exports = app