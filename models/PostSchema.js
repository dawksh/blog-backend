const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
    cover: String
})

module.exports = post = mongoose.model("post", PostSchema)