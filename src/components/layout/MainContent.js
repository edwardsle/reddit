import React, { Component } from 'react';
import MainPagePostCard from './MainPagePostCard';
import Axios from 'axios';

class MainContent extends Component {
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
                                name: res.data[i].User.name,
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
            <>
            {
                this.state.post.map((post) => (
                    <MainPagePostCard post={post}/>
                ))
            }
            </>
        )
    }
}

export default MainContent;
