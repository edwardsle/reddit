const express = require('express');
const postsRoute = express.Router();
const { Post } = require('../models');

postsRoute.use(express.json());

// Get Post by ID
postsRoute.get('/', async (req, res) => {
    const post = await Post.findAll();
    if(post === null ){
        res.sendStatus(404);
        console.log("No Posts found");
    }
    else{
        res.status(200).json(post);
    }
});

// Get Post by ID
postsRoute.get('/:postID', async (req, res) => {
    const postid = req.params.postID;
    const post = await Post.findByPk(postid);
    if(post === null ){
        res.sendStatus(404);
        console.log("Post not found");
    }
    else{
        res.status(200).json(post);
    }
});


// Create Post
postsRoute.post('/create', async (req, res) => {
    let { subject, imgUrl, content, userId } = req.body;
    subject = subject.toLowerCase();
    // console.log(subject);
    // console.log(imgUrl);
    // console.log(content);
    // console.log(userId);
    const postCreated = Post.create({
        subject,
        imgUrl,
        content,
        userId
    });

    if (postCreated != null) {
        res.status(200).send("Insert succesfully");
    } else {
        res.sendStatus(404);
        console.log('Post creating failed');
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
        res.status(200).send("Update successfully");
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
