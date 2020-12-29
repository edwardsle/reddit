import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Axios from 'axios';

class MainPagePostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: null,
            post: []
        }
    }
    componentDidMount() {
        Axios.get("http://localhost:3001/api/posts/all").then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                console.log(res.data[i].User.name);
                let postid = res.data[i].id;
                Axios.get("http://localhost:3001/api/likes/" + postid).then((resp) => {
                    // this.setState({post: res.data, likes: response.data.like.likes})
                    Axios.get("http://localhost:3001/api/comments/" + postid).then((response) => {
                        // this.setState({post: res.data, likes: response.data.like.likes})
                        this.setState({
                            post: [...this.state.post,
                                {
                                id: res.data[i].id,
                                name:res.data[i].User.name,
                                imgUrl: res.data[i].imgUrl,
                                title: res.data[i].subject,
                                content: res.data[i].content,
                                likes: resp.data.like.likes,
                                commentsCount: response.data.count
                            }]
                                
                        })
                    })
                })
            }
        })
    }
    render() {
        return (
            <div className="row rounded m-0 p-0" style={{ background: "#fff", border: "1px solid rgba(135,138,140,0.5)" }}>
                {
                    this.state.post.map(post => (
                        <>  
                            <div className="d-none d-md-block col-md-1 text-center py-3">
                                <button class="far fa-caret-square-up"></button>
                                <a><small ><strong>{post.likes}</strong></small></a>
                                <button class="far fa-caret-square-down"></button>
                            </div>
                            <div className="col-12 col-md-11">
                                <div className="my-2"><small><strong>r/MadeMeSmile</strong> • Posted byu/{post.name} 3 hours ago</small></div>
                                <div>
                                    <p>{post.content}</p>
                                    <img className="img-fluid" src="https://picsum.photos/600/300" />
                                </div>
                                <div className="mt-2 text-muted"><p><small><i class="fas fa-comment-alt"></i> {post.commentsCount} Comments  <i class="fas fa-share"></i> Share  <i class="fas fa-bookmark"></i> Save </small></p></div>
                            </div>
                        </>
                    ))
                }
            <div></div>
            </div>

        )
    }
}

export default MainPagePostCard;