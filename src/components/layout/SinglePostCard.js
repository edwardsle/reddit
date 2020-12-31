import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from 'mdbreact';
import SinglePostComments from './SinglePostComments';


export default class SinglePostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            userAuthData: {}
        }
    }

    componentDidMount() {
        const isLogged = localStorage.getItem('userAuthData') != null;
        const userAuthData = isLogged ? JSON.parse(localStorage.getItem('userAuthData')) : null;
        this.setState({ isLogged, userAuthData });
    }
    render() {
        return (
            <MDBContainer className="rounded" style={{ background: "#fff", border: "1px solid rgba(135,138,140,0.5)" }}>
                <MDBRow>
                    <MDBCol size='1' className="rounded grey lighten-5">
                        <ul className="list-group text-center py-3">
                            <li className="list-item-post-card-like"><a><i class="far fa-caret-square-up"></i></a></li>
                            <li className="list-item-post-card-like"><a><small><strong>{this.props.post.likes}</strong></small></a></li>
                            <li className="list-item-post-card-like"><a><i class="far fa-caret-square-down"></i></a></li>
                        </ul>
                    </MDBCol>
                    <MDBCol size='11'>
                        <div className="py-1"><small><strong>r/MadeMeSmile</strong> • Posted byu/{this.props.post.name} 3 hours ago</small></div>
                        <h4><strong>{this.props.post.title}</strong></h4>
                        <p className="py-1">{this.props.post.content}</p>
                        <img className="img-fluid" src={this.props.post.imgUrl} />
                        <MDBRow between className="mt-2 text-muted">
                            <MDBCol size="8">
                                <a className="mr-3"><small><i class="fas fa-comment-alt"></i> {this.props.post.comments} Comments</small></a>
                                <a className="mr-3"><small><i class="fas fa-share"></i> Share</small></a>
                                <a className="mr-3"><small><i class="fas fa-bookmark"></i> Save</small></a>
                                <a className="mr-3"><small><i class="fas fa-ban"></i> Hide</small></a>
                                <a className=""><small><i class="fas fa-flag"></i> Report</small></a>
                            </MDBCol>
                            <MDBCol size="4" className="text-right"><small>76% Upvoted</small></MDBCol>
                        </MDBRow>
                        <div>
                            {
                                this.state.isLogged ?
                                    (
                                        <>
                                            <div className="row text-muted rounded border justify-content-between align-items-center my-3 p-1 mx-0">
                                            <label className="mt-2">Comment as {this.state.userAuthData.name}</label>
                                            <textarea class="form-control" id="textAreaExample" rows="3" placeholder="What are your thoughts"></textarea>
                                            <button type="button" class="btn btn-danger">COMMENT</button>
                                            </div>
                                            
                                        </>
                                    )
                            :
                                    (
                                        <>
                                            <div className="row text-muted rounded border justify-content-between align-items-center my-3 p-1 mx-0">
                                                <div className="col-6">
                                                    <span>Log in or sign up to leave a comment</span>
                                                </div>
                                                <div className="col-6 m-0 p-0 text-right">
                                                    <MDBBtn outline size="sm" color="primary" className="z-depth-0">LOG IN</MDBBtn>
                                                    <MDBBtn color="primary" size="sm" className="z-depth-0">SIGN UP</MDBBtn>
                                                </div>
                                            </div>
                                        </>
                                    )
                            }
                        </div>
                        {
                            this.props.comment.map((comment) => (
                                <SinglePostComments comment={comment} />
                            ))
                        }
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        )
    }
}
