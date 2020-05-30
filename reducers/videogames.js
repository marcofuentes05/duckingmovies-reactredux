import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from './types/videogames';

const byId = (state={}, action) => {
  switch (action.type) {
    case types.FETCH_VIDEOGAMES_COMPLETED: {
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
    case types.ADD_VIDEOGAME_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      }
      return newState;
    }
    case types.ADD_VIDEOGAME_COMPLETED: {
      const { tempId, videogame } = action.payload;
      const newState = omit(state, tempId);
      newState[videogame.id] = {
        ...videogame,
        isConfirmed: true,
      }
      return newState;
    }
    case types.REMOVE_VIDEOGAME_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state=[], action) => {
  switch (action.type) {
    case types.FETCH_VIDEOGAMES_COMPLETED: {
      return [
        ...action.payload.order,
      ];
    }
    case types.ADD_VIDEOGAME_STARTED: {
      return [
        ...state,
        ...action.payload.id,
      ];
    }
    case types.ADD_VIDEOGAME_COMPLETED: {
      const { tempId, videogame } = action.payload;
      return state.map(id => id === tempId ? videogame.id : id);
    }
    case types.REMOVE_VIDEOGAME_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false , action) => {
  switch (action.type) {
    case types.FETCH_VIDEOGAMES_STARTED: {
      return true;
    }
    case types.FETCH_VIDEOGAMES_COMPLETED: {
      return false;
    }
    case types.FETCH_VIDEOGAMES_FAILED: {
      return false;
    }
    default: {
      return state;
    } 
  }
};

const error = (state=null , action) => {
  switch (action.type) {
    case types.FETCH_VIDEOGAMES_STARTED:
    case types.FETCH_VIDEOGAMES_COMPLETED:
    case types.ADD_VIDEOGAME_STARTED:
    case types.ADD_VIDEOGAME_COMPLETED:
    case types.REMOVE_VIDEOGAME_STARTED:
    case types.REMOVE_VIDEOGAME_COMPLETED:
      return null;
    case types.FETCH_VIDEOGAMES_FAILED:
    case types.ADD_VIDEOGAME_FAILED:
    case types.REMOVE_VIDEOGAME_FAILED:
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

export const getVideogame = (state, id) => state.byId[id];
export const getVideogames = state => state.order.map(id => getVideogame(state, id));
export const isFetchingVideogame = state => state.isFetching;
export const getVideogameError = state => state.error;