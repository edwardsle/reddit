import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCol } from "mdbreact";
import NavLoginItem from './NavLoginItem';
import {useDispatch,useSelector} from 'react-redux';
import {logoutUserAction} from '../../redux/actions/users/usersActions';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            userAuthData: {}
        }
        this.logOut = this.logOut.bind(this);
    }

    componentDidMount() {
        const isLogged = localStorage.getItem('userAuthData') != null;
        const userAuthData = isLogged ? JSON.parse(localStorage.getItem('userAuthData')) : null;
        this.setState({ isLogged, userAuthData });
    }

    logOut() {
        if(this.state.isLogged != null){
            const dispatch = useDispatch();
            console.log("Clicked me");
        }
    }
    render() {
        return (
            <MDBNavbar color="white" light className="z-depth-0 fixed-top" expand="md">
                <MDBNavbarBrand>
                    <img className="float-left" width="30px" src="img/reddit_logo.png" />
                    <span className="d-none d-md-block float-left ml-1"><strong>reddit</strong></span>
                </MDBNavbarBrand>
                <MDBCol  className="mx-auto">
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
                                <MDBDropdownItem href="#!"> <MDBIcon icon="copyright"/> Reddit Coins</MDBDropdownItem>
                                <MDBDropdownItem href="#!"> <MDBIcon icon="landmark" /> Reddit Premium</MDBDropdownItem>
                                <MDBDropdownItem href="#!"> <MDBIcon far icon="question-circle" /> Help Center</MDBDropdownItem>
                                
                            {this.state.isLogged ? (
                                <>
                                     <MDBDropdownItem href="#!"  ><MDBIcon icon="sign-in-alt" /> Logout</MDBDropdownItem>
                                </>
                            ) : (
                                <>
                                    <MDBDropdownItem href="#!"><MDBIcon icon="sign-in-alt" /> Log In / Sign Up</MDBDropdownItem>
                                </>
                            )}
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

export default Navbar;