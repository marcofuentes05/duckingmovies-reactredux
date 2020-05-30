import { combineReducers } from 'redux';

import * as types from '../types/signUp';

const isSigningUp = (state=false, action) => {
  switch(action.type) {
    case types.SIGN_UP_STARTED: {
      return true;
    }
    case types.SIGN_UP_COMPLETED: {
      return false;
    }
    case types.SIGN_UP_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state=null, action) => {
  switch(action.type) {
    case types.SIGN_UP_STARTED: {
      return null;
    }
    case types.SIGN_UP_COMPLETED: {
      return null;
    }
    case types.SIGN_UP_FAILED: {
      return action.payload.error;
    }
    default: {
      return state;
    }
  }
};

const signUp = combineReducers({
  isSigningUp,
  error,
});

export default signUp;

export const getIsSigningUp = state => state.isSigningUp;
export const getSignUpError = state => state.error;