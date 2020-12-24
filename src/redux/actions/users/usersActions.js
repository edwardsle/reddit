import axios from 'axios';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from '../actionTypes';

const registerUserAction = (name, email, password) => {
    return async dispatch => {
        try {
            dispatch ({
                type: USER_REGISTER_REQUEST            
            });
    
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_DOMAIN}/api/users/register`,
                {
                    name,
                    email,
                    password
                }, 
                config
            );
    
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data
            });

            // Set the user to be logged
            localStorage.setItem('userAuthData', JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.message
            });
        }
    };
};

// login action
const loginUserAction = (email, password) => {
    return async dispatch =>{
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const { data } = await axios.post(
                `${process.env.REACT_APP_API_DOMAIN}/api/users/login`,
                {
                    email,
                    password
                }, 
                config
            );
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            });
            // Set the user to be logged
            localStorage.setItem('userAuthData', JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message
            });
        }
    }
}

const logoutUserAction = () => {
    return async dispatch =>{
        dispatch({
            type: USER_LOGOUT
        });
        localStorage.removeItem('userAuthData');
    }    
}

export { registerUserAction, loginUserAction, logoutUserAction };
