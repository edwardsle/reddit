import React, { Component } from 'react';
import Axios from 'axios';


export default class MainPagePostCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            vote: this.props.post.likes
        }
        this.upVotes = this.upVotes.bind(this);
        this.downVotes = this.downVotes.bind(this);
    }

    upVotes() {
        var newVote = this.state.vote+1;
        this.setState({
            vote: newVote,
        })
        var postid = this.props.post.id;
        Axios.put("http://localhost:3001/api/likes/upvote/" + postid);
    }

    downVotes() {
        var newVote = this.state.vote-1;
        this.setState({
            vote: newVote,
        })
        var postid = this.props.post.id;
        Axios.put("http://localhost:3001/api/likes/downvote/" + postid);
    }

    render() {
        return (
            <div className="row rounded m-0 p-0 mb-2" style={{ background: "#fff", border: "1px solid rgba(135,138,140,0.5)" }}>
                <div className="d-none d-md-block col-md-1 text-center py-3">
                    <ul className="list-group">
                        <li className="list-item-post-card-like" onClick={this.upVotes.bind(this)}><a><i class="far fa-caret-square-up"></i></a></li>
                        <li className="list-item-post-card-like"><a><small><strong>{this.state.vote}</strong></small></a></li>
                        <li className="list-item-post-card-like" onClick={this.downVotes.bind(this)}><a><i class="far fa-caret-square-down"></i></a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-11">
                    <div className="my-2"><small><strong>r/MadeMeSmile</strong> • Posted byu/{this.props.post.name} 3 hours ago</small></div>
                    <div>
                        <p>{this.props.post.content} </p>
                        <img className="img-fluid" src="https://picsum.photos/600/300" />
                    </div>
                    <div className="mt-2 text-muted">
                        <p>
                            <a className="mr-3"><small><i class="fas fa-comment-alt"></i> {this.props.post.commentsCount} Comments</small></a>
                            <a className="mr-3"><small><i class="fas fa-share"></i> Share</small></a>
                            <a className="mr-3"><small><i class="fas fa-bookmark"></i> Save</small></a>
                            <a className=""><small><i class="fas fa-ellipsis-h"></i></small></a>
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}