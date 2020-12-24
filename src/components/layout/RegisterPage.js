import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBAlert } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction, logoutUserAction } from '../../redux/actions/users/usersActions';



const RegisterPage = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  

    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return state.userLogin;
    });
    const { loading, userInfo } = state;
    console.log(state);

    useEffect(() => {
        if (userInfo) {
            console.log(userInfo);
            if(userInfo === "OK"){
                dispatch(logoutUserAction());
            }
            history.push('/');
        }
    }, [userInfo]);

    const formSubmitHandler = e => {
        e.preventDefault();
        dispatch(registerUserAction(name, email, password));
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
                    <strong>Sign Up</strong>
                </h5>
                    <MDBCardBody>
                    {loading===false && <MDBAlert color="danger" >
                        This mail was registered!
                        </MDBAlert>}
                    <form onSubmit={formSubmitHandler}>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                        Your name
                        </label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => {setName(e.target.value);}} 
                            id="defaultFormRegisterNameEx" 
                            className="form-control" 
                            required
                        />
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                        Your email
                        </label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => {setEmail(e.target.value);}} 
                            id="defaultFormRegisterEmailEx" 
                            className="form-control" 
                            required 
                        />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                        Your password
                        </label>
                        <input 
                            type="text"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value);}} 
                            id="defaultFormRegisterPasswordEx" 
                            className="form-control" 
                            required
                        />
                        <div className="text-center mt-4">
                            <MDBBtn
                                color="primary" 
                                className="btn-block" 
                                type="submit">
                                Register
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

export default RegisterPage;