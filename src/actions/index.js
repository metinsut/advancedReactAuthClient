import { AUTH_USER } from './actionTypes';
import axios from 'axios';

export const signup = (data, callback) => async dispatch => {
    const response = await axios.post('http://localhost:3002/signup', data);
    await dispatch({
        type: AUTH_USER,
        payload: response.data
    });
    if (!response.data.fail) {
        callback();
    }
};
