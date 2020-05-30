import * as types from '../types/signUp';

export const startSignUp = (username, password, first_name, last_name) => ({
  type: types.SIGN_UP_STARTED,
  payload: {
    username,
    password,
    first_name,
    last_name,
    is_staff: false,
  },
});

export const completeSignUp = () => ({
  type: types.SIGN_UP_COMPLETED,
});

export const failSignUp = error => ({
  type: types.SIGN_UP_FAILED,
  payload: { error },
});