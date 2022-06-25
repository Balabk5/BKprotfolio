const express = require('express')

const router = express.Router();

const Post = require('../models/post')

router.get('/', (req, res) => {
    res.send('we are on post')
})

router.post('/', (req, res) => {
    console.log(req.body)
})

module.exports = router;