const express = require('express');
const commentsRoute = express.Router();
const { Comment, User, Post } = require('../models');

commentsRoute.use(express.json());

//Get all comment 
commentsRoute.get('/all', async (req, res) => {
    const comments = await Comment.findAll({include: [{model: User}, {model:Post}]});
    if(comments != null ){
        res.status(200).json(comments);
    }
    else{
        res.status(404).send('404 - Not found');
    }
});

//Get all comment by PostID
commentsRoute.get('/:postID', async (req, res) => {
    const postid = req.params.postID;
    console.log(postid);
    const comments = await Comment.findAndCountAll({where: {postId:postid}});
    if(comments != null ){
        res.status(200).json(comments);
    }
    else{
        res.status(404).send('404 - Not found');
    }
});

//Insert comments
commentsRoute.post('/create', async (req, res) => {
    let { content, userId, postId} = req.body;

    const commentCreated = Comment.create({
        content,
        userId,
        postId
    });

    if(commentCreated != null ){
        res.status(200).end();
    }
    else{
        res.status(404).send('404 - Not found');
    }
});


module.exports = commentsRoute;