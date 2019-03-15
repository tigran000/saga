// Get USER data, eigher directly if JWT is present or 
// when clicking on the login button


import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    RESET_ERROR
} from '../constants';

const initalState = {
    isAuthenticated: false,
    name: undefined,
    isAdmin: undefined,
    isFetching: false,
    error: null,
}

const User = (state = initalState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false,
                error: null
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isFetching: false,
                name: action.user.userName,
                isAdmin: action.user.isAdmin,
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                name: action.user.userName,
                isAdmin: action.user.isAdmin,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        case RESET_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export default User;