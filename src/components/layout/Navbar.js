import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn, MDBCol, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal14: false,
            modal15: false,
            username: "",
            email: "",
            password: "",
        }

        this.onChange = this.onChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    onRegister(e) {
        e.preventDefault();
        const data = {
            userName: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post("/user/register", data)
        .then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }
    onLogin(e) {
        e.preventDefault();
        const data = {
            userName: this.state.username,
            password: this.state.password
        }
        axios.post("/user/login", data)
        .then(
            res => {
                localStorage.setItem('token',res.token);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    render() {
        return (
            <Router>
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)} className="text-center"><h1>Log In</h1></MDBModalHeader>
                    <MDBModalBody>
                        <form>
                            <div className="grey-text">
                                <MDBInput 
                                value={this.state.username}
                                onChange={this.onChange}
                                name="username"
                                label="Your name" icon="user" group type="username" validate error="wrong"
                                    success="right" />
                                <MDBInput 
                                value={this.state.password}
                                onChange={this.onChange}
                                name="password"
                                label="Your password" icon="lock" group type="password" validate />
                            </div>
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={this.onLogin}>Log In</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>

                <MDBModal isOpen={this.state.modal15} toggle={this.toggle(15)} centered>
                    <MDBModalHeader toggle={this.toggle(15)}><h1>Sign Up</h1></MDBModalHeader>
                    <MDBModalBody>
                        <form >
                            <div className="grey-text">
                                <MDBInput
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    name="username"
                                    label="Your name" icon="user" group type="username" validate error="wrong"
                                    success="right" />
                                <MDBInput
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    name="email"
                                    label="Your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" />
                                <MDBInput
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    name="password"
                                    label="Your password" icon="lock" group type="password" validate />
                            </div>
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="primary" onClick={this.onRegister}>Register</MDBBtn>
                        <MDBBtn color="secondary" onClick={this.toggle(15)}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>

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
                        <MDBNavItem>
                            <MDBBtn color="primary" outline size="sm" className="d-none d-md-block text-uppercase" onClick={this.toggle(14)}>Log In</MDBBtn>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBBtn color="primary" size="sm" className="d-none d-md-block text-uppercase" onClick={this.toggle(15)}>Sign up</MDBBtn>
                        </MDBNavItem>
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
            </Router>
        );
    }
}

export default Navbar;