const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')

// setup mongodb
const PORT = process.env.PORT || 4000
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Successfully connected to DB!!'))

// public folder
app.use(express.static('public'))

// middlewares
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// setup routes
app.get("/", (req, res) => res.send("Get Requests working at /"))
app.get("/params/:id", (req, res) => res.send(req.params))
app.use("/post", require('./routes/postRoutes'))

// initalize app
app.listen(8000, () => console.log("Server running successfully at port 8000"))