import React, { Component } from 'react';
import {Button, MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBCardFooter } from 'mdbreact';
import './css/Sidebar.css';
class Sidebar extends Component {
    render() {
        return (
            <>
                <MDBRow className="mb-3">
                    <MDBCol>
                        <MDBCard className="z-depth-0">
                            <MDBCardHeader className="d-flex"> <img class="imgSidebar" src="./img/sidebar.png" />News communities to keep you informed</MDBCardHeader>
                            <MDBCardBody>
                            <div className="row">

                            </div>
                            <Button className="viewall"size="lg" block>View ALL</Button>
                            </MDBCardBody>
                            <MDBCardFooter className="d-flex flex-row">
                                <Button className="p-2" >Top</Button>
                                <Button className="p-2">Near You</Button>
                                <Button className="p-2">Fitness</Button>
                                <Button className="p-2">Food</Button>
                            </MDBCardFooter>
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