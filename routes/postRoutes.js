const router = require('express').Router();
const Post = require('../models/PostSchema.js')

router.post('/', async (req, res) => {

    // retrieve data from req
    const { title, body, cover } = req.body
    // contruct post model
    const newPost = new Post({
        title,
        body,
        cover,
    });
    // save to db
    try {
        const savedPost = await newPost.save()
        res.json(savedPost)
    } catch (err) {
        console.log(err)
    }
})

router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts)
});

router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.json(post)
})

module.exports = router