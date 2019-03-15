import { put, take, fork } from 'redux-saga/effects';
import axios from 'axios';
import {
    getUserSuccess,
    getUserFailure
} from '../actions';

import { GET_USER_REQUEST } from '../constants'

export function* getUser() {
    try {
        const Authorization = 'Bearer '.concat(localStorage.getItem('token'));
        const { data: { user } } = yield axios.get('http://localhost:8000/user/profile', { headers: { Authorization } });
        yield put(getUserSuccess(user))
    } catch (error) {
        yield put(getUserFailure(error))
    }
}

export default function* watchGetUserRequest() {
    while (true) {
        yield take(GET_USER_REQUEST)
        yield fork(getUser)
    }
}