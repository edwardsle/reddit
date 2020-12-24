import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MDBNavItem, MDBBtn, MDBNavLink } from "mdbreact";

class NavLoginItem extends Component {
    state = {
        isLogged: false,
        userAuthData: {}
    }

    componentDidMount() {
        const isLogged = localStorage.getItem('userAuthData') != null;
        const userAuthData = isLogged ? JSON.parse(localStorage.getItem('userAuthData')) : null;
        console.log(userAuthData);
        this.setState({ isLogged, userAuthData });
    }
    
    render() {
        if(this.state.isLogged){
            return (
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                        {this.state.userAuthData.name}
                    </MDBNavLink>
                </MDBNavItem>
            );            
        } else {
            return(
                <>                
                <MDBNavItem>
                    <MDBNavLink className="btn btn-outline-primary waves-effect waves-light btn-sm px-4" to="login">LOG IN</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="btn btn-primary btn-sm waves-effect waves-light text-white px-4" to="register">SIGN UP</MDBNavLink>
                </MDBNavItem>
                </>
            );
                
                
        }
    }
}

export default NavLoginItem;
