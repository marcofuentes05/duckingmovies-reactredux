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
        case types.FETCH_SERIE_DIRECTOR_STARTED: {
            return true;
        }
        case types.FETCH_SERIE_DIRECTOR_COMPLETED: {
            return false;
        }
        case types.FETCH_SERIE_DIRECTOR_FAILED: {
            return false;
        }
        default: {
            return state;
        }
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case types.FETCH_SERIE_DIRECTORS_STARTED:
        case types.FETCH_SERIE_DIRECTORS_COMPLETED:
        case types.ADD_SERIE_DIRECTOR_STARTED:
        case types.ADD_SERIE_DIRECTOR_COMPLETED:
        case types.REMOVE_SERIE_DIRECTOR_STARTED:
        case types.REMOVE_SERIE_DIRECTOR_COMPLETED:
            return null;
        case types.FETCH_SERIE_DIRECTORS_FAILED:
        case types.ADD_SERIE_DIRECTOR_FAILED:
        case types.REMOVE_SERIE_DIRECTOR_FAILED:
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

export const getDirector = (state, id) => state.director;
export const isFetchingDirectors = state => state.isFetching;
export const getDirectorError = state => state.error;