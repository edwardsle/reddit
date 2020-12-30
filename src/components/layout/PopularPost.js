import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Sidebar from './Sidebar'
import MainContent from './MainContent';
import LocationNav from './LocationNav';
import './css/PopularPost.css';

class PopularPost extends Component {
    render() {
        return (
            <MDBContainer className="mt-3">
                <div className="content-bar"> 
                <p className="popular-posts-title mt-3 mb-2"><strong>Popular posts</strong></p>               
                <MDBRow>                
                    <MDBCol lg="8">
                        <LocationNav />
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
