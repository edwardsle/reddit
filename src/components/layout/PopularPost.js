import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Sidebar from './Sidebar'
import MainContent from './MainContent';
import './css/PopularPost.css';

class PopularPost extends Component {
    render() {
        return (
            <MDBContainer  className="mt-3">
                <div className="content-bar">
                <span className="popular-posts-title mb-3">Popular posts</span>
                
                <MDBRow>
                    <MDBCol lg="8">
                        <MainContent />
                    </MDBCol>
                    <MDBCol lg="4" className="d-none d-lg-block">
                        <Sidebar />
                    </MDBCol>
                </MDBRow>
                </div>
                
            </MDBContainer>
        )
    }
}

export default PopularPost;
