const express = require('express');
const postsRoute = express.Router();
const { Post, User, Comment, Like } = require('../models');

postsRoute.use(express.json());

// Get Post by ID
postsRoute.get('/all', async (req, res) => {
    const post = await Post.findAll( { include: User } );
    res.status(200).json(post);
});

// Get Post by ID
postsRoute.get('/:postID', async (req, res) => {
    const postid = req.params.postID;
    const post = await Post.findByPk(postid, { include: User } );
    if(post === null ){
        res.status(404).send('404 - Not found');
    }
    else{
        res.status(200).json(post);
    }
});


// Create Post
postsRoute.post('/create', async (req, res) => {
    let { subject, imgUrl, content, userId } = req.body;
    subject = subject.toLowerCase();
    const postCreated = Post.create({
        subject,
        imgUrl,
        content,
        userId
    });

    if (postCreated != null) {
        res.status(201).end();
    } else {
        res.status(404).send('404 - Not found');
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
        res.status(200).end();
    } else {
        res.status(404).send('404 - Not found');
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
        res.status(200).end();
    } else {
        res.status(404).send('404 - Not found');
    }
});

module.exports = postsRoute;
