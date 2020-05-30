import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/genres';

const byId = (state={}, action) => {
  switch (action.type) {
    case types.FETCH_GENRES_COMPLETED: {
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
    case types.ADD_GENRE_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      }
      return newState;
    }
    case types.ADD_GENRE_COMPLETED: {
      const { tempId, genre } = action.payload;
      const newState = omit(state, tempId);
      newState[genre.id] = {
        ...genre,
        isConfirmed: true,
      }
      return newState;
    }
    case types.REMOVE_GENRE_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state=[], action) => {
  switch (action.type) {
    case types.FETCH_GENRES_COMPLETED: {
      return [
        ...action.payload.order,
      ];
    }
    case types.ADD_GENRE_STARTED: {
      return [
        ...state,
        ...action.payload.id,
      ];
    }
    case types.ADD_GENRE_COMPLETED: {
      const { tempId, genre } = action.payload;
      return state.map(id => id === tempId ? genre.id : id);
    }
    case types.REMOVE_GENRE_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false , action) => {
  switch (action.type) {
    case types.FETCH_GENRES_STARTED: {
      return true;
    }
    case types.FETCH_GENRES_COMPLETED: {
      return false;
    }
    case types.FETCH_GENRES_FAILED: {
      return false;
    }
    default: {
      return state;
    } 
  }
};

const error = (state=null , action) => {
  switch (action.type) {
    case types.FETCH_GENRES_STARTED:
    case types.FETCH_GENRES_COMPLETED:
    case types.ADD_GENRE_STARTED:
    case types.ADD_GENRE_COMPLETED:
    case types.REMOVE_GENRE_STARTED:
    case types.REMOVE_GENRE_COMPLETED:
      return null;
    case types.FETCH_GENRES_FAILED:
    case types.ADD_GENRE_FAILED:
    case types.REMOVE_GENRE_FAILED:
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

export const getGenre = (state, id) => state.byId[id];
export const getGenres = state => state.order.map(id => getGenre(state, id));
export const isFetchingGenres = state => state.isFetching;
export const getGenreError = state => state.error;