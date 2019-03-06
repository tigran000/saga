import {
    LOAD_TITLES_REQUEST,
    LOAD_TITLES_SUCCESS,
    LOAD_TITLES_FAILURE
} from '../constants';

const initalState = {
    titles: [],
    isFetching: false,
    error: null
}

const title = (state = initalState, action) => {
    switch (action.type) {
        case LOAD_TITLES_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case LOAD_TITLES_SUCCESS:
            return {
                ...state,
                titles: action.titles,
                isFetching: false,
            }
        case LOAD_TITLES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        default:
            return state;
    }
}

export default title;