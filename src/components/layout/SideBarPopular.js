import React from 'react';
import {Button, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBCardFooter } from 'mdbreact';

const SideBarPopular = () => {
    return (
        <MDBCard className="z-depth-0" style={{ border: "1px solid #c3c4c5" }}>
            <MDBCardHeader>Popular Communities</MDBCardHeader>
            <MDBCardBody>Body</MDBCardBody>
            <MDBCardFooter>Footer</MDBCardFooter>
        </MDBCard>
    )
}

export default SideBarPopular;
