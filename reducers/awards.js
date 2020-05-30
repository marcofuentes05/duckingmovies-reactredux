import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/awards';

const byId = (state={}, action) => {
  switch (action.type) {
    case types.FETCH_AWARDS_COMPLETED: {
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
    case types.ADD_AWARD_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      }
      return newState;
    }
    case types.ADD_AWARD_COMPLETED: {
      const { tempId, award } = action.payload;
      const newState = omit(state, tempId);
      newState[award.id] = {
        ...award,
        isConfirmed: true,
      }
      return newState;
    }
    case types.REMOVE_AWARD_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state=[], action) => {
  switch (action.type) {
    case types.FETCH_AWARDS_COMPLETED: {
      return [
        ...action.payload.order,
      ];
    }
    case types.ADD_AWARD_STARTED: {
      return [
        ...state,
        ...action.payload.id,
      ];
    }
    case types.ADD_AWARD_COMPLETED: {
      const { tempId, award } = action.payload;
      return state.map(id => id === tempId ? award.id : id);
    }
    case types.REMOVE_AWARD_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false , action) => {
  switch (action.type) {
    case types.FETCH_AWARDS_STARTED: {
      return true;
    }
    case types.FETCH_AWARDS_COMPLETED: {
      return false;
    }
    case types.FETCH_AWARDS_FAILED: {
      return false;
    }
    default: {
      return state;
    } 
  }
};

const error = (state=null , action) => {
  switch (action.type) {
    case types.FETCH_AWARDS_STARTED:
    case types.FETCH_AWARDS_COMPLETED:
    case types.ADD_AWARD_STARTED:
    case types.ADD_AWARD_COMPLETED:
    case types.REMOVE_AWARD_STARTED:
    case types.REMOVE_AWARD_COMPLETED:
      return null;
    case types.FETCH_AWARDS_FAILED:
    case types.ADD_AWARD_FAILED:
    case types.REMOVE_AWARD_FAILED:
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

export const getAward = (state, id) => state.byId[id];
export const getAwards = state => state.order.map(id => getAward(state, id));
export const isFetchingAwards = state => state.isFetching;
export const getAwardError = state => state.error;