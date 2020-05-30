import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from './types/consoles';

const byId = (state={}, action) => {
  switch (action.type) {
    case types.FETCH_CONSOLES_COMPLETED: {
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
    case types.ADD_CONSOLE_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      }
      return newState;
    }
    case types.ADD_CONSOLE_COMPLETED: {
      const { tempId, console } = action.payload;
      const newState = omit(state, tempId);
      newState[console.id] = {
        ...console,
        isConfirmed: true,
      }
      return newState;
    }
    case types.REMOVE_CONSOLE_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state=[], action) => {
  switch (action.type) {
    case types.FETCH_CONSOLES_COMPLETED: {
      return [
        ...action.payload.order,
      ];
    }
    case types.ADD_CONSOLE_STARTED: {
      return [
        ...state,
        ...action.payload.id,
      ];
    }
    case types.ADD_CONSOLE_COMPLETED: {
      const { tempId, console } = action.payload;
      return state.map(id => id === tempId ? console.id : id);
    }
    case types.REMOVE_CONSOLE_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false , action) => {
  switch (action.type) {
    case types.FETCH_CONSOLES_STARTED: {
      return true;
    }
    case types.FETCH_CONSOLES_COMPLETED: {
      return false;
    }
    case types.FETCH_CONSOLES_FAILED: {
      return false;
    }
    default: {
      return state;
    } 
  }
};

const error = (state=null , action) => {
  switch (action.type) {
    case types.FETCH_CONSOLES_STARTED:
    case types.FETCH_CONSOLES_COMPLETED:
    case types.ADD_CONSOLE_STARTED:
    case types.ADD_CONSOLE_COMPLETED:
    case types.REMOVE_CONSOLE_STARTED:
    case types.REMOVE_CONSOLE_COMPLETED:
      return null;
    case types.FETCH_CONSOLES_FAILED:
    case types.ADD_CONSOLE_FAILED:
    case types.REMOVE_CONSOLE_FAILED:
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

export const getConsole = (state, id) => state.byId[id];
export const getConsoles = state => state.order.map(id => getConsole(state, id));
export const isFetchingConsoles = state => state.isFetching;
export const getConsoleError = state => state.error;