import * as types from '../types/signUp';

export const startSignUp = (username, password, firstName, lastName, email) => ({
  type: types.SIGN_UP_STARTED,
  payload: {
    username,
    password,
    firstName,
    lastName,
    email,
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