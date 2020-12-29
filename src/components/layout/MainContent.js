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
        this.sortBy = this.sortBy.bind(this);
    }
    componentDidMount() {
        Axios.get("http://localhost:3001/api/posts/all").then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                // console.log(res.data[i].updatedAt)
                let postid = res.data[i].id;
                var likes = 0;
                var counts = 0;
                var time = res.data[i].updatedAt;
                time = time.replace('Z', ' ').replace('T', ' ');

                Axios.get("http://localhost:3001/api/likes/" + postid).then((resp) => {
                    if (resp.data.like.likes != null) {
                        likes = resp.data.like.likes;
                    }
                    else {
                        likes = 0;
                    }
                })
                Axios.get("http://localhost:3001/api/comments/" + postid).then((response) => {
                    counts = response.data.count;
                    this.setState({
                        post: [...this.state.post,
                        {
                            id: res.data[i].id,
                            name: res.data[i].User.name,
                            imgUrl: res.data[i].imgUrl,
                            title: res.data[i].subject,
                            content: res.data[i].content,
                            likes: likes,
                            commentsCount: counts
                        }]

                    })
                })
            }
        })

    }

    sortBy(key) {
        console.log(key)
        this.setState({
            post: this.state.post.sort((a,b) => a[key] < b[key])
        })
    }
    
    render() {
        return (
            <>
                {
                    this.state.post.map((post) => (
                        <MainPagePostCard post={post} 
                        sortBy={this.sortBy}
                        />
                    ))
                }
            </>
        )
    }
}

export default MainContent;
