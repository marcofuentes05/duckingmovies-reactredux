import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from './types/movies';

const byId = (state={}, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_COMPLETED: {
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
    case types.ADD_MOVIE_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      }
      return newState;
    }
    case types.ADD_MOVIE_COMPLETED: {
      const { tempId, movie } = action.payload;
      const newState = omit(state, tempId);
      newState[movie.id] = {
        ...movie,
        isConfirmed: true,
      }
      return newState;
    }
    case types.REMOVE_MOVIE_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state=[], action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_COMPLETED: {
      return [
        ...action.payload.order,
      ];
    }
    case types.ADD_MOVIE_STARTED: {
      return [
        ...state,
        ...action.payload.id,
      ];
    }
    case types.ADD_MOVIE_COMPLETED: {
      const { tempId, movie } = action.payload;
      return state.map(id => id === tempId ? movie.id : id);
    }
    case types.REMOVE_MOVIE_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false , action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_STARTED: {
      return true;
    }
    case types.FETCH_MOVIES_COMPLETED: {
      return false;
    }
    case types.FETCH_MOVIES_FAILED: {
      return false;
    }
    default: {
      return state;
    } 
  }
};

const error = (state=null , action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_STARTED:
    case types.FETCH_MOVIES_COMPLETED:
    case types.ADD_MOVIE_STARTED:
    case types.ADD_MOVIE_COMPLETED:
    case types.REMOVE_MOVIE_STARTED:
    case types.REMOVE_MOVIE_COMPLETED:
      return null;
    case types.FETCH_MOVIES_FAILED:
    case types.ADD_MOVIE_FAILED:
    case types.REMOVE_MOVIE_FAILED:
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

export const getMovie = (state, id) => state.byId[id];
export const getMovies = state => state.order.map(id => getMovie(state, id));
export const isFetchingMovies = state => state.isFetching;
export const getMovieError = state => state.error;