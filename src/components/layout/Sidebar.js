import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import './css/Sidebar.css';
import SideBarFitnessCard from './SideBarFitnessCard';
import SideBarTrending from './SideBarTrending';
class Sidebar extends Component {
    render() {
        return (
            <>
                <MDBRow className="mb-3">
                    <MDBCol>
                        <SideBarFitnessCard />
                    </MDBCol>                    
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <SideBarTrending />
                    </MDBCol>
                </MDBRow>
            </>

        )
    }
}

export default Sidebar;