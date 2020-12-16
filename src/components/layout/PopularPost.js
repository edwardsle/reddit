import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import Sidebar from './Sidebar'
import MainContent from './MainContent';

class PopularPost extends Component {
    render() {
        return (
            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol lg="8">
                        <MainContent />
                    </MDBCol>
                    <MDBCol lg="4" className="d-none d-lg-block">
                        <Sidebar />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default PopularPost;
