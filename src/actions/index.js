import { AUTH_USER } from './actionTypes';
import axios from 'axios';

export const signup = (data, callback) => async dispatch => {
    const response = await axios.post('http://localhost:3002/signup', data);
    await dispatch({
        type: AUTH_USER,
        payload: response.data
    });
    localStorage.setItem('token', response.data.success.user.token);
    if (!response.data.fail) {
        callback();
    }
};

export const checkToken = token => dispatch => {
    dispatch({
        type: AUTH_USER,
        payload: {
            fail: null,
            state: null,
            success: {
                user: {
                    token: token
                }
            }
        }
    });
};

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: {
            fail: null,
            state: null,
            success: {
                user: {
                    token: null
                }
            }
        }
    };
};
