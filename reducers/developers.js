import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/developers';

const developer = (state={}, action) => {
  switch (action.type) {
    case types.FETCH_DEVELOPER_COMPLETED: {
      return action.payload;
    }
    case types.FETCH_DEVELOPER_STARTED: {
      return {};
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false , action) => {
  switch (action.type) {
    case types.FETCH_DEVELOPER_STARTED: {
      return true;
    }
    case types.FETCH_DEVELOPER_COMPLETED: {
      return false;
    }
    case types.FETCH_DEVELOPER_FAILED: {
      return false;
    }
    default: {
      return state;
    } 
  }
};

const error = (state=null , action) => {
  switch (action.type) {
    case types.FETCH_DEVELOPER_STARTED:
    case types.FETCH_DEVELOPER_COMPLETED:
      return null;
    case types.FETCH_DEVELOPER_FAILED:
      return action.payload.error;
    default: {
      return state;
    }
  }
};

export default combineReducers({
  developer,
  isFetching,
  error,
});

export const getDeveloper = (state) => state.developer;
export const isFetchingDevelopers = state => state.isFetching;
export const getDeveloperError = state => state.error;