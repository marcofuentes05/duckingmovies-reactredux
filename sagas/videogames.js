import {
    call,
    takeEvery,
    put,
    select,
} from 'redux-saga/effects';

import { API_BASE_URL } from '../settings'

import { normalize } from 'normalizr'
import * as schemas from './../schemas/videogames'

import * as selectors from '../reducers'
import * as types from '../types/videogames'
import * as actions from '../actions/videogames'

function* getVideogames(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            console.log('ENTRAMOS A LA SAGA DE VIDEOGAMES', token)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/videogames/trending`,
                {
                    method: 'GET',
                    body: JSON.stringify(action.payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`
                    }
                }
            );
            if (response.status == 200) {
                const jsonResult = yield response.json();
                const {
                    entities: { videogames },
                    result
                } = normalize(jsonResult, schemas.videogames)
                console.log('TODO BIEN' , videogames)
                yield put(actions.completeFetchingVideogames(videogames, result))
            } else if (response.status == 400) {
                yield put(actions.failFetchingVideogame('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failFetchingVideogames(non_field_errors[0]))
            }
        }
    } catch (error) {
        yield put(actions.failFetchingVideogames('Hubo un error :('))
    }
}

export function* watchGetVideogamesStarted() {
    yield takeEvery(
        types.FETCH_VIDEOGAMES_STARTED,
        getVideogames,
    )
}