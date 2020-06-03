import { combineReducers } from 'redux';

import * as types from '../types/directors';

const director = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_SERIE_DIRECTOR_COMPLETED: {
            let newState = state;
            newState = action.payload
            return newState;
        }
        default: {
            return state;
        }
    }
};


const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.FETCH_MOVIE_DIRECTOR_STARTED: {
            return true;
        }
        case types.FETCH_MOVIE_DIRECTOR_COMPLETED: {
            return false;
        }
        case types.FETCH_MOVIE_DIRECTOR_FAILED: {
            return false;
        }
        default: {
            return state;
        }
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case types.FETCH_MOVIE_DIRECTOR_STARTED:
        case types.FETCH_MOVIE_DIRECTOR_COMPLETED:
        case types.ADD_MOVIE_DIRECTORSTARTED:
        case types.ADD_MOVIE_DIRECTORCOMPLETED:
        case types.REMOVE_MOVIE_DIRECTORSTARTED:
        case types.REMOVE_MOVIE_DIRECTORCOMPLETED:
            return null;
        case types.FETCH_MOVIE_DIRECTOR_FAILED:
        case types.ADD_MOVIE_DIRECTORFAILED:
        case types.REMOVE_MOVIE_DIRECTORFAILED:
            return action.payload.error;
        default: {
            return state;
        }
    }
};

export default combineReducers({
    director,
    isFetching,
    error,
});

export const getDirector = state => state.director;
export const isFetchingDirectors = state => state.isFetching;
export const getDirectorError = state => state.error;