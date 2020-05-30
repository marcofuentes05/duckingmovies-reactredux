import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/developers';

const byId = (state={}, action) => {
  switch (action.type) {
    case types.FETCH_DEVELOPERS_COMPLETED: {
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
    case types.ADD_DEVELOPER_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      }
      return newState;
    }
    case types.ADD_DEVELOPER_COMPLETED: {
      const { tempId, developer } = action.payload;
      const newState = omit(state, tempId);
      newState[developer.id] = {
        ...developer,
        isConfirmed: true,
      }
      return newState;
    }
    case types.REMOVE_DEVELOPER_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state=[], action) => {
  switch (action.type) {
    case types.FETCH_DEVELOPERS_COMPLETED: {
      return [
        ...action.payload.order,
      ];
    }
    case types.ADD_DEVELOPER_STARTED: {
      return [
        ...state,
        ...action.payload.id,
      ];
    }
    case types.ADD_DEVELOPER_COMPLETED: {
      const { tempId, developer } = action.payload;
      return state.map(id => id === tempId ? developer.id : id);
    }
    case types.REMOVE_DEVELOPER_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false , action) => {
  switch (action.type) {
    case types.FETCH_DEVELOPERS_STARTED: {
      return true;
    }
    case types.FETCH_DEVELOPERS_COMPLETED: {
      return false;
    }
    case types.FETCH_DEVELOPERS_FAILED: {
      return false;
    }
    default: {
      return state;
    } 
  }
};

const error = (state=null , action) => {
  switch (action.type) {
    case types.FETCH_DEVELOPERS_STARTED:
    case types.FETCH_DEVELOPERS_COMPLETED:
    case types.ADD_DEVELOPER_STARTED:
    case types.ADD_DEVELOPER_COMPLETED:
    case types.REMOVE_DEVELOPER_STARTED:
    case types.REMOVE_DEVELOPER_COMPLETED:
      return null;
    case types.FETCH_DEVELOPERS_FAILED:
    case types.ADD_DEVELOPER_FAILED:
    case types.REMOVE_DEVELOPER_FAILED:
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

export const getDeveloper = (state, id) => state.byId[id];
export const getDevelopers = state => state.order.map(id => getDeveloper(state, id));
export const isFetchingDevelopers = state => state.isFetching;
export const getDeveloperError = state => state.error;