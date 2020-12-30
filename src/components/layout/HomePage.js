import React, { Component } from 'react';
import Trending from './Trending';
import PopularPost from './PopularPost';

class HomePage extends Component {
    render() {
        return (
            <>                
                <Trending />
                <PopularPost />
            </>
        )
    }
}

export default HomePage;
