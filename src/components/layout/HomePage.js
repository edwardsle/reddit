import React, { Component } from 'react';
import Navbar from './Navbar';
import Trending from './Trending';
import PopularPost from './PopularPost';

class HomePage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Trending />
                <PopularPost />
            </>
        )
    }
}

export default HomePage;
