import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBAlert } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/actions/users/usersActions';

const LoginPage = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return state.userLogin;
    });
    const { loading, userInfo } = state;
    
    useEffect(() => {
        if (userInfo) {
          history.push('/');
        }
    }, [userInfo]);

    const formSubmitHandler = e => {
        e.preventDefault();
        dispatch(loginUserAction(email, password));
        history.push('/');
    };

    return (
        <MDBContainer
            className='d-flex justify-content-center my-3 my-md-5'
            style={{ height: '100%', width: '100%' }}
        >
            <MDBRow>
                <MDBCol md='6'>
                    <MDBCard style={{ width: "22rem" }}>
                        <h5 className="card-header bg-primary white-text py-4">
                            <strong>Login</strong>
                        </h5>
                        <MDBCardBody>
                        {loading===false && <MDBAlert color="danger" >
                            Login failed!
                        </MDBAlert>}
                        <form onSubmit={formSubmitHandler}>
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Your email
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value);}} 
                                    type="email"
                                    id="defaultFormLoginEmailEx"
                                    className="form-control"
                                    placeholder="Enter email"
                                    required
                                />
                                <br />
                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value);}} 
                                    id="defaultFormLoginPasswordEx"
                                    className="form-control"
                                    placeholder="Password"
                                    required
                                />
                                <div className="text-center mt-4">
                                    <MDBBtn
                                        color="primary"
                                        type="submit"
                                        className="btn-block"
                                    >
                                        Log in
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default LoginPage;