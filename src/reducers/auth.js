import { AUTH_USER } from '../actions/actionTypes';

const INITIAL_STATE = {
    fail: null,
    state: null,
    success: null
};

const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default auth;
