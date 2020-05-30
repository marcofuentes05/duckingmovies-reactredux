import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from './types/directors';

const byId = (state={}, action) => {
  switch (action.type) {
    case types.FETCH_DIRECTORS_COMPLETED: {
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
    case types.ADD_DIRECTOR_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      }
      return newState;
    }
    case types.ADD_DIRECTOR_COMPLETED: {
      const { tempId, director } = action.payload;
      const newState = omit(state, tempId);
      newState[director.id] = {
        ...director,
        isConfirmed: true,
      }
      return newState;
    }
    case types.REMOVE_DIRECTOR_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state=[], action) => {
  switch (action.type) {
    case types.FETCH_DIRECTORS_COMPLETED: {
      return [
        ...action.payload.order,
      ];
    }
    case types.ADD_DIRECTOR_STARTED: {
      return [
        ...state,
        ...action.payload.id,
      ];
    }
    case types.ADD_DIRECTOR_COMPLETED: {
      const { tempId, director } = action.payload;
      return state.map(id => id === tempId ? director.id : id);
    }
    case types.REMOVE_DIRECTOR_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false , action) => {
  switch (action.type) {
    case types.FETCH_DIRECTORS_STARTED: {
      return true;
    }
    case types.FETCH_DIRECTORS_COMPLETED: {
      return false;
    }
    case types.FETCH_DIRECTORS_FAILED: {
      return false;
    }
    default: {
      return state;
    } 
  }
};

const error = (state=null , action) => {
  switch (action.type) {
    case types.FETCH_DIRECTORS_STARTED:
    case types.FETCH_DIRECTORS_COMPLETED:
    case types.ADD_DIRECTOR_STARTED:
    case types.ADD_DIRECTOR_COMPLETED:
    case types.REMOVE_DIRECTOR_STARTED:
    case types.REMOVE_DIRECTOR_COMPLETED:
      return null;
    case types.FETCH_DIRECTORS_FAILED:
    case types.ADD_DIRECTOR_FAILED:
    case types.REMOVE_DIRECTOR_FAILED:
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

export const getDirector = (state, id) => state.byId[id];
export const getDirectors = state => state.order.map(id => getDirector(state, id));
export const isFetchingDirectors = state => state.isFetching;
export const getDirectorError = state => state.error;