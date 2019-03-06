import * as types from '../constants';

export const loadTitlesRequest = () => ({
    type: types.LOAD_TITLES_REQUEST
});

export const loadTitlesSuccess = titles => ({
    type: types.LOAD_TITLES_SUCCESS,
    titles
});

export const loadTitlesFailure = error => ({
    type: types.LOAD_TITLES_FAILURE,
    error
});

