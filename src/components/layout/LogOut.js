import React, { useState } from 'react';
import { MDBDropdownItem, MDBIcon } from "mdbreact";
import { useDispatch } from 'react-redux';
import { logoutUserAction } from '../../redux/actions/users/usersActions';


const LogOut = ({ history }) => {
    const [logged, setLogged] = useState(true);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutUserAction());
        setLogged(false);
    };

    return (
        <MDBDropdownItem href="#!"  onClick={logoutHandler}><MDBIcon icon="sign-in-alt" /> Logout</MDBDropdownItem>
    )
}

export default LogOut;
