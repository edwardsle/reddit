const express = require('express');
const likesRoute = express.Router();
const { Like } = require('../models');

likesRoute.use(express.json());

//Get like of postID
likesRoute.get('/post/:postID', async (req, res) => {
    const postid = req.params.postID;
    const totalVote = await Like.findOne({ where: {postId: postid}});

    if(totalVote != null) {
        console.log(totalVote.likes);
        res.status(200).json({like: totalVote.likes});
    }
    else{
        res.sendStatus(404);
        console.log("Not found")
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
        res.status(200).send("Insert succesfully");
    } else {
        res.sendStatus(404);
        console.log('Post creating failed');
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
        res.status(200).send("Update successfully");
    } else {
        res.sendStatus(404);
        console.log('Update failed');
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
        res.status(200).send("Update successfully");
    } else {
        res.sendStatus(404);
        console.log('Update failed');
    }
});

//

module.exports = likesRoute;