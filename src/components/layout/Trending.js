import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import TrendingCard from './TrendingCard'

class Trending extends Component {
    render() {
        return (
            <MDBContainer className="mt-5 pt-4">
                <p><strong>Trending today</strong></p>
                <MDBRow>
                    <MDBCol><TrendingCard /></MDBCol>
                    <MDBCol className="d-none d-sm-block d-md-block d-lg-block"><TrendingCard /></MDBCol>
                    <MDBCol className="d-none d-sm-none d-md-block d-lg-block"><TrendingCard /></MDBCol>
                    <MDBCol className="d-none d-sm-none d-md-none d-lg-block"><TrendingCard /></MDBCol>
                </MDBRow>                
            </MDBContainer>
        )
    }
}

export default Trending;