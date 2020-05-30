import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
} from 'redux-saga/effects';

import { API_BASE_AUTH }  from '../settings'

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
            console.log('Tus credenciales no son correctas mano :(')    
        } 
        else {
            const non_field_errors = yield response.text();
            yield put(actions.failLogin(non_field_errors[0]))
        }
    }catch(error){
        console.log(API_BASE_AUTH ,'Fallo la conexion mano' , error)
        yield put(actions.failLogin('Falló la conexión'))
    }
}

export function* watchLoginStarted(){
    yield takeEvery(
        types.AUTHENTICATION_STARTED,
        login,
    )
}