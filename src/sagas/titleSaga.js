import { put, take, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    loadTitlesRequest,
    loadTitlesSuccess,
    loadTitlesFailure
    
} from '../actions';

export function* loadTitles() {
    try {
        const result = yield axios('https://jsonplaceholder.typicode.com/posts');
        yield put(loadTitlesSuccess(result.data))
    } catch (error) {
        yield put(loadTitlesFailure(error))
    }
}

export default function* watchLoadTitlesRequest() {
    while (true) {
        yield take(loadTitlesRequest)
        yield call(loadTitles)
      }
}