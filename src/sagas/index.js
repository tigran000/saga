import { fork } from 'redux-saga/effects';

import watchGetUserRequest from './userSaga'
import watchLoginRequest from './loginSaga'


export default function* root() {
    yield fork(watchLoginRequest)
    yield fork(watchGetUserRequest)
}