const router = require('express').Router();
const post = require('../models/PostSchema.js')

router.post('/', async (req, res) => {

    // retrieve data from req
    const { title, body, cover } = req.body
    // contruct post model
    const newPost = new post({
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
    const posts = await post.find();
    res.json(posts)
});

router.get('/:id', async (req, res) => {
    const post = await post.findById(req.params.id)
    res.json(post)
})

module.exports = router