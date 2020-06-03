import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
} from 'redux-saga/effects';

import { API_BASE_AUTH, validTimePercentage, API_BASE_AUTH_REFRESH }  from '../settings'

import * as selectors from '../reducers'
import * as types from '../types/auth'
import * as actions from '../actions/auth'

function* login (action) {
    try{
        const response = yield call(
            fetch,
            `${API_BASE_AUTH}`,
            {
                method : 'POST',
                body : JSON.stringify(action.payload),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }
        );
        if(response.status == 200){
            const { token } = yield  response.json();
            yield put(actions.completeLogin(token))
        } else if (response.status == 400){
            yield put(actions.failLogin('Credenciales incorrectas'))  
        } 
        else {
            const non_field_errors = yield response.text();
            yield put(actions.failLogin(non_field_errors[0]))
        }
    }catch(error){
        yield put(actions.failLogin('Falló la conexión'))
    }
}

export function* watchLoginStarted(){
    yield takeEvery(
        types.AUTHENTICATION_STARTED,
        login,
    )
}

function* refreshToken(action) {
    const expiration = yield select(selectors.getAuthExpiration);
    const now =  parseInt(new Date().getTime() / 1000);
    const usedTimePercentage = now/expiration;
  
    if (usedTimePercentage > validTimePercentage) {
      try {
        const token = yield select(selectors.getToken);
        const response = yield call(
            fetch,
            `${API_BASE_AUTH_REFRESH}`,
            {
              method: 'POST',
              body: JSON.stringify({ token }),
              headers:{
                'Content-Type': 'application/json',
              },
            },
        );
  
        if (response.status == 200) {
            const jsonResult = yield response.json();
            yield put(actions.completeTokenRefresh(jsonResult.token));
        } else {
            // TODO: poner un redirect al home (login)
            const { non_field_errors } = yield response.json();
            yield put(actions.failTokenRefresh(non_field_errors[0]));
        }
      } catch (error) {
          // TODO: poner un redirect al home (login)
          yield put(actions.failTokenRefresh('Falló horrible la conexión mano'));
      }
    }
  }
  
  export function* watchRefreshTokenStarted() {
    yield takeEvery(
      types.TOKEN_REFRESH_STARTED,
      refreshToken,
    );
  }
  