const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')

// setup mongodb
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Successfully connected to DB!!'))

// public folder
app.use(express.static('public'))

// middlewares
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// setup routes
app.use("/post", require('./routes/postRoutes'))

// initalize app
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log("Server running successfully at port ", PORT))