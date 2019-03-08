import { call } from 'redux-saga/effects';

import watchLoadTitlesRequest from './userSaga'
import watchLoginRequest from './loginSaga'


export default function* root() {
    yield call(watchLoginRequest)
    yield call(watchLoadTitlesRequest)
}