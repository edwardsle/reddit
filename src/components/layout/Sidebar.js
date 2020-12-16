import React, { Component } from 'react';
import {MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBCardFooter} from 'mdbreact';

class Sidebar extends Component {
    render() {
        return (
            <>
            <MDBRow className="mb-3">
                <MDBCol>
                    <MDBCard className="z-depth-0">
                        <MDBCardHeader>Header</MDBCardHeader>
                        <MDBCardBody>Body</MDBCardBody>
                        <MDBCardFooter>Footer</MDBCardFooter>
                    </MDBCard>
                </MDBCol>                
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <MDBCard className="z-depth-0">
                        <MDBCardHeader>Header</MDBCardHeader>
                        <MDBCardBody>Body</MDBCardBody>
                        <MDBCardFooter>Footer</MDBCardFooter>
                    </MDBCard>
                </MDBCol>                
            </MDBRow>
            </>
            
        )
    }
}

export default Sidebar;