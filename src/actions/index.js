import * as types from '../constants';

export const getUserRequest = () => ({
    type: types.GET_USER_REQUEST
});

export const getUserSuccess = user => ({
    type: types.GET_USER_SUCCESS,
    user
});

export const getUserFailure = error => ({
    type: types.GET_USER_FAILURE,
    error
});

export const loginRequest = (credentials) => {
    return {
        type: types.LOGIN_REQUEST,
        credentials
    }
};

export const loginSuccess = user => ({
    type: types.LOGIN_SUCCESS,
    user
});

export const loginFailure = error => ({
    type: types.LOGIN_FAILURE,
    error
});

export const logout = () => ({
    type: types.LOGOUT
});

export const resetError = () => ({
    type: types.RESET_ERROR
});
