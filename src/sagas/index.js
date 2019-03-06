import {all, fork } from 'redux-saga/effects';

import watchLoadTitlesRequest from './titleSaga'


export default function* root() {
    yield all([
        fork(watchLoadTitlesRequest)
    ])
}