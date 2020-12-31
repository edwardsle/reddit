const express = require('express');
const likesRoute = express.Router();
const { Like, Post, User } = require('../models');

likesRoute.use(express.json());

//Get like of postID
likesRoute.get('/:postID', async (req, res) => {
    const postid = req.params.postID;
    console.log(postid);
    const totalVote = await Like.findOne({ include:[{model: User}], where: {postId: postid}});

    if(totalVote != null) {
        res.status(200).json({like: totalVote});
    }
    else{
        res.status(404).send('404 - Not found');
    }
});

// Create likes
likesRoute.post('/create', async (req, res) => {
    let { userId, postId, commentId } = req.body;
    const likes = Like.create({
        userId,
        postId,
        commentId
    });

    if (likes != null) {
        res.status(200).end();
    } else {
        res.status(404).send('404 - Not found');
    }
});

// Upvote increment
likesRoute.put('/upvote/:postID', async (req, res) => {
    const postid = req.params.postID;
    const likeUpdated = Like.findOne({
        where: {postId: postid}
    }).then(function(like){ 
        var likes = like.likes + 1;
        Like.update({
            likes
        },{
            where:{
                postId: postid
            }
        })
    })
    if (likeUpdated != null) {
        res.status(200).end();
    } else {
        res.status(404).send('404 - Not found');
    }
});

// Downvote increment
likesRoute.put('/downvote/:postID', async (req, res) => {
    const postid = req.params.postID;
    const likeUpdated = Like.findOne({
        where: {postId: postid}
    }).then(function(like){ 
        var likes = like.likes - 1;
        Like.update({
            likes
        },{
            where:{
                postId: postid
            }
        })
    })
    if (likeUpdated != null) {
        res.status(200).end();
    } else {
        res.status(404).send('404 - Not found');
    }
});

//

module.exports = likesRoute;