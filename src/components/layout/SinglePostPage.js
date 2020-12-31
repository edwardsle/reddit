import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import SideBarFitnessCard from './SideBarFitnessCard';
import SinglePostCard from './SinglePostCard';
import Axios from 'axios';

class SinglePostPage extends Component {
    state = {
        post: [],
        comment: []
    }
    componentDidMount() {
        Axios.get(`http://localhost:3001/api/posts/${this.props.match.params.id}`)
            .then(res => {
                var likes = 0;
                var commentsCount = 0;
                Axios.get(`http://localhost:3001/api/likes/${this.props.match.params.id}`).then((resp) => {
                    if (resp.data.like.likes != null) {
                        likes = resp.data.like.likes;
                    }
                    else {
                        likes = 0;
                    }

                })
                Axios.get(`http://localhost:3001/api/comments/${this.props.match.params.id}`).then(response => {
                    commentsCount = response.data.count;
                    console.log(commentsCount)
                    for (let i = 0; i < response.data.count; i++) {
                        // console.log(res.data.count);
                        this.setState({
                            comment: [...this.state.comment,
                            {
                                id: response.data.rows[i].id,
                                name: response.data.rows[i].User.name,
                                content: response.data.rows[i].content,
                            }]
                        })
                    }
                    this.setState({
                        post:
                        {
                            id: res.data.id,
                            name: res.data.User.name,
                            imgUrl: res.data.imgUrl,
                            title: res.data.subject,
                            content: res.data.content,
                            likes: likes,
                            comments: commentsCount
                        }
                    })
                })
            })
    }

    render() {
        return (
            <MDBContainer className="mt-5 py-4">
                <MDBRow>
                    <MDBCol lg="8">
                        <SinglePostCard post={this.state.post} comment={this.state.comment} />
                    </MDBCol>
                    <MDBCol lg="4">
                        <SideBarFitnessCard />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default SinglePostPage;
