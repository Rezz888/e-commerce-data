const express = require("express")
const helmet = require("helmet")
const welcomeRouter = require("./welcome/welcome-router")
const userRouter = require("./users/user-router")

const server = express()

server.use(helmet())
server.use(express.json())

server.use(welcomeRouter)
server.use(userRouter)

server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server
