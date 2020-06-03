import { combineReducers } from 'redux';

import * as types from '../types/searchMovies';

const byId = (state={}, action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_MOVIES_STARTED: {
      const newState = {};
      return newState;
    }
    
    case types.FETCH_SEARCH_MOVIES_COMPLETED: {
      const newState = { ...state };
      const { entities, order } = action.payload;
      order.forEach(id =>{
        newState[id] = {
          ...entities[id],
          isConfirmed: true,
        }
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};

const order = (state=[], action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_MOVIES_STARTED: {
      return []
    }
    case types.FETCH_SEARCH_MOVIES_COMPLETED: {
      return [
        ...action.payload.order,
      ];
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false, action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_MOVIES_STARTED: {
      return true;
    }
    case types.FETCH_SEARCH_MOVIES_COMPLETED: {
      return false;
    }
    case types.FETCH_SEARCH_MOVIES_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state=null, action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_MOVIES_STARTED:
    case types.FETCH_SEARCH_MOVIES_COMPLETED:
      return null;
    case types.FETCH_SEARCH_MOVIES_FAILED:
      return action.payload.error;
    default: {
      return state;
    }
  }
};

export default combineReducers({
  byId,
  order,
  isFetching,
  error,
});

export const getSearchMovie = (state, id) => state.byId[id];
export const getSearchMovies = state => state.order.map(id => getSearchMovie(state, id));
export const isFetchingSearchMovies = state => state.isFetching;
export const getSearchMovieError = state => state.error;