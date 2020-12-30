import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import SideBarFitnessCard from './SideBarFitnessCard';
import SinglePostCard from './SinglePostCard';

class SinglePostPage extends Component {
    render() {
        return (
            <MDBContainer className="mt-5 py-4">
                <MDBRow>
                    <MDBCol lg="8">
                        <SinglePostCard />
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
