import {
    call,
    takeEvery,
    put,
    select,
} from 'redux-saga/effects';

import { API_BASE_URL } from '../settings'

import { normalize } from 'normalizr'

import * as selectors from '../reducers'
import * as types from '../types/directors'
import * as actions from '../actions/directors'
import * as schemas from '../schemas/directors';

function* getMovieDirector(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            const { id } = yield select(selectors.getSelectedItem)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/movies/${id}/director`,
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
                    entities: { directors },
                    result
                } = normalize(jsonResult, schemas.directors)
                yield put(actions.completeFetchingMovieDirector(directors, result))
            } else if (response.status == 400) {
                yield put(actions.failFetchingMovieDirector('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failFetchingMovieDirector(non_field_errors[0]))
            }
        }
    } catch (error) {
        yield put(actions.failFetchingMovieDirector('Hubo un error :(' + error))
    }
}

export function* watchGetMovieDirectorStarted() {
    yield takeEvery(
        types.FETCH_MOVIE_DIRECTOR_STARTED,
        getMovieDirector,
    )
}

