import { put, take, fork } from 'redux-saga/effects';
import axios from 'axios';

import {
    loginSuccess,
    loginFailure
} from '../actions';

import { LOGIN_REQUEST } from '../constants'

export function* login(credentials) {
    try {
        const { data: { user, token } } = yield axios.post('http://localhost:8000/auth/login', { credentials });
        localStorage.setItem('token', token);
        yield put(loginSuccess(user))
    } catch (error) {
        yield put(loginFailure(error))
    }
}

export default function* watchLoginRequest() {
    while (true) {
        const { credentials } = yield take(LOGIN_REQUEST)
        yield fork(login, credentials)
    }
}