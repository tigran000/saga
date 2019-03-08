import { put, take, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    getUserRequest,
    getUserSuccess,
    getUserFailure
} from '../actions';

export function* getUser() {
    try {
        const result = yield axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(result)
        yield put(getUserSuccess(result.data))
    } catch (error) {
        yield put(getUserFailure(error))
    }
}

export default function* watchGetUserRequest() {
    while (true) {
        yield take(getUserRequest)
        yield call(getUser)
    }
}