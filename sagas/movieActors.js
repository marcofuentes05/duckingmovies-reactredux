import {
    call,
    takeEvery,
    put,
    select,
} from 'redux-saga/effects';

import { API_BASE_URL } from '../settings'

import { normalize } from 'normalizr'

import * as selectors from '../reducers'
import * as types from '../types/actors'
import * as actions from '../actions/actors'
import * as schemas from '../schemas/actors';

function* getMovieActors(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            const { id } = yield select(selectors.getSelectedItem)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/movies/${id}/actors`,
                {
                    method: 'GET',
                    body: JSON.stringify(action.payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`
                    }
                }
            );
            console.log(response)
            if (response.status == 200) {
                const jsonResult = yield response.json();
                const {
                    entities: { actors },
                    result
                } = normalize(jsonResult, schemas.actors)
                yield put(actions.completeFetchingMovieActors(actors, result))
            } else if (response.status == 400) {
                yield put(actions.failFetchingMovieActors('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failFetchingMovieActors(non_field_errors[0]))
            }
        }
    } catch (error) {
        yield put(actions.failFetchingMovieActors('Hubo un error :(' + error))
    }
}

export function* watchGetMovieActorsStarted() {
    yield takeEvery(
        types.FETCH_SERIE_ACTORS_STARTED,
        getMovieActors,
    )
}

