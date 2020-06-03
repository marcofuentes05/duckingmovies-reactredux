import { combineReducers } from 'redux';

import * as types from '../types/searchVideogames';

const byId = (state={}, action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_VIDEOGAMES_STARTED: {
      const newState = {};
      return newState;
    }
    
    case types.FETCH_SEARCH_VIDEOGAMES_COMPLETED: {
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
    case types.FETCH_SEARCH_VIDEOGAMES_STARTED: {
      return []
    }
    case types.FETCH_SEARCH_VIDEOGAMES_COMPLETED: {
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
    case types.FETCH_SEARCH_VIDEOGAMES_STARTED: {
      return true;
    }
    case types.FETCH_SEARCH_VIDEOGAMES_COMPLETED: {
      return false;
    }
    case types.FETCH_SEARCH_VIDEOGAMES_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state=null, action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_VIDEOGAMES_STARTED:
    case types.FETCH_SEARCH_VIDEOGAMES_COMPLETED:
      return null;
    case types.FETCH_SEARCH_VIDEOGAMES_FAILED:
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

export const getSearchVideogame = (state, id) => state.byId[id];
export const getSearchVideogames = state => state.order.map(id => getSearchVideogame(state, id));
export const isFetchingSearchVideogames = state => state.isFetching;
export const getSearchVideogameError = state => state.error;