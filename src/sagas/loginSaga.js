import { put, take, fork } from 'redux-saga/effects';
import axios from 'axios';

import {
    loginRequest,
    loginSuccess,
    loginFailure
} from '../actions';

export function* login(credentials) {
    try {
        const { data: { user } } = yield axios.post('http://localhost:8000/auth/login', { credentials });
        yield put(loginSuccess(user))
    } catch (error) {
        yield put(loginFailure(error))
    }
}

export default function* watchLoginRequest() {
    while (true) {
        const { credentials } = yield take(loginRequest)
        yield fork(login, credentials)
    }
}