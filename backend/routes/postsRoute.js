const express = require('express');
const postsRoute = express.Router();
const { Post } = require('../models');

postsRoute.use(express.json());


postsRoute.get('/',async (req, res) => {
        const posts = await Post.findAll();

        if (posts === null) {
            res.sendStatus(500);
            console.log('There are no post');
        } else {
            res.status(200).json(posts);
        }
    });


// Create Post
postsRoute.post('/create', async (req, res) => {
    let { subject, imgUrl, content, userid } = req.body;
    subject = subject.toLowerCase();
    const postCreated = Post.create({
        subject,
        imgUrl,
        content,
        userid
    });

    if (postCreated != null) {
        res.status(200);
    } else {
        res.sendStatus(404);
        console.log('User creating failed');
    }
});

// Post Update
postsRoute.put('/update/:postID', async (req, res) => {
    const postid = req.params.postID;
    let { subject, imgUrl, content } = req.body;
    subject = subject.toLowerCase();
    const postUpdate = Post.update({
        subject,
        imgUrl,
        content
    }, {
        where: {
            id: postid
        }
    })
    if (postUpdate != null) {
        res.status(200);
    } else {
        res.sendStatus(404);
        console.log('Update failed');
    }

});

// Delete Post
postsRoute.delete('/delete/:postID', async (req, res) => {
    const id = req.params.postID;
    const isDel = Post.destroy({
        where: {
            id: id
        }
    });

    if (isDel != null) {
        res.status(200);
    } else {
        res.sendStatus(404);
    }
});

module.exports = postsRoute;
