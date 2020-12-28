const express = require('express');
const commentsRoute = express.Router();
const { Comment, User, Post } = require('../models');

commentsRoute.use(express.json());

//Get all comment 
commentsRoute.get('/', async (req, res) => {
    const comments = await Comment.findAll({include: [{model: User}, {model:Post}]});
    if(comments != null ){
        res.status(200).json(comments);
    }
    else{
        res.sendStatus(404);
        console.log("Post not found");
    }
});

//Get all comment by PostID
commentsRoute.get('/:postID', async (req, res) => {
    console.log("hi")
    const postid = req.params.postID;
    console.log(postid);
    const comments = await Comment.findAll({include: [{model: User}, {model:Post}], where: {postId:postid}});
    if(comments != null ){
        res.status(200).json(comments);
    }
    else{
        res.sendStatus(404);
        console.log("Post not found");
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
        res.status(200).send("Comment inserted");
    }
    else{
        res.sendStatus(404);
        console.log("Post not found");
    }
});


module.exports = commentsRoute;