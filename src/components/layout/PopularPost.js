import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import Sidebar from './Sidebar'
import MainContent from './MainContent';
import './css/PopularPost.css';

class PopularPost extends Component {
    render() {
        return (
            <MDBContainer className="mt-3">
                <div className="content-bar">
                    <span className="popular-posts-title mb-3"><strong>Popular posts</strong></span>
                    <MDBRow>
                        <MDBCol lg="8">
                            <div className="row my-3 mx-0 py-3 rounded" style={{ background: "#fff", border: "1px solid rgba(135,138,140,0.5)" }}>
                                <div className="col-11 col-lg-5 text-primary">
                                    <a className="pr-3"><i class="fas fa-burn"></i> Hot</a>
                                    <a className="dropdown-toggle pr-3"> United States</a>
                                    <a className="dropdown-toggle"> All States</a>
                                </div>
                                <div className="col-lg-6 d-none d-md-block text-muted">
                                    <a className="pr-3"><i class="fas fa-certificate"></i> New</a>
                                    <a className=""><i class="fas fa-sort-numeric-up"></i> Top</a>
                                </div>
                                <div className="col-1 col-lg-1 text-right text-primary">
                                    <a className="dropdown-toggle"><i class="fas fa-equals"></i></a>
                                </div>
                            </div>
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
