import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
} from 'redux-saga/effects';

import { API_BASE_URL } from '../settings'

import { normalize } from 'normalizr'
import * as schemas from './../schemas/series'

import * as selectors from '../reducers'
import * as types from '../types/series'
import * as actions from '../actions/series'

function* getSeries(action){
    try{
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth){
            const token = yield select(selectors.getToken)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/series/trending`,
                {
                    method: 'GET',
                    body: JSON.stringify(action.payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : `JWT ${token}`
                    }
                }
            );
            console.log
            if (response.status == 200) {
                const jsonResult = yield response.json();
                const {
                    entities : { series , actors} , 
                    result
                } = normalize(jsonResult, schemas.series)
                yield put(actions.completeFetchingSeries(series, result))
            } else if (response.status == 400) {
                yield put(actions.failFetchingSeries('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failFetchingSeries(non_field_errors))
            }
        }
    }catch(error){
        yield put (actions.failFetchingSeries(error))
    }
}

export function* watchSeriesStarted(){
    yield takeEvery(
        types.FETCH_SERIES_STARTED,
        getSeries,
    )
}