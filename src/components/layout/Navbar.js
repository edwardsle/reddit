import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCol } from "mdbreact";
import NavLoginItem from './NavLoginItem';

class Navbar extends Component {
    render() {
        return (
            <MDBNavbar color="white" light className="z-depth-0 fixed-top" expand="md">
                <MDBNavbarBrand>
                    <img className="float-left" width="30px" src="img/reddit_logo.png" />
                    <span className="d-none d-md-block float-left ml-1"><strong>reddit</strong></span>
                </MDBNavbarBrand>
                <MDBCol className="mx-auto">
                    <div className="input-group form-sm">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <MDBIcon className="text-gray" icon="search" />
                            </span>
                        </div>
                        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </MDBCol>
                <MDBNavbarNav right>
                    <NavLoginItem />
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <MDBIcon icon="user" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu right basic className="dropdown-default">
                                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

export default Navbar;