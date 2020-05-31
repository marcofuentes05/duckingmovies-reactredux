import {
  call,
  takeEvery,
  put,
  // race,
  // all,
  delay,
  select,
} from 'redux-saga/effects';

import { API_BASE_URL }  from '../settings';

import * as selectors from '../reducers';
import * as types from '../types/signUp';
import * as actions from '../actions/signUp';
import * as authActions from '../actions/auth';


function* signUp (action) {
  try{
    const response = yield call(
      fetch,
      `${API_BASE_URL}/users/create_user/`,
      {
        method: 'POST',
        body: JSON.stringify(action.payload),
        headers:{
          'Content-type': 'application/json'
        },
      },
    );

    if(response.status == 200){
      const username = action.payload.username;
      const password = action.payload.password;
      yield put(actions.completeSignUp());
      yield put(authActions.startLogin(username, password));
    } else {
      const { non_field_errors } = yield response.json();
      yield put(actions.failSignUp(non_field_errors[0]));
    }
  }catch(error){
    yield put(actions.failSignUp('Connection failed!'));
  }
};


export function* watchSignUpStarted(){
  yield takeEvery(
      types.SIGN_UP_STARTED,
      signUp,
  )
}