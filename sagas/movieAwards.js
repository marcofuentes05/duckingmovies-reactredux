import {
    call,
    takeEvery,
    put,
    select,
} from 'redux-saga/effects';

import { API_BASE_URL } from '../settings'

import { normalize } from 'normalizr'

import * as selectors from '../reducers'
import * as types from '../types/awards'
import * as actions from '../actions/awards'
import * as schemas from '../schemas/awards';

function* getMovieAwards(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            const { id } = yield select(selectors.getSelectedItem)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/movies/${id}/awards`,
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
                    entities: { awards },
                    result
                } = normalize(jsonResult, schemas.awards)
                yield put(actions.completeFetchingMovieAwards(awards, result))
            } else if (response.status == 400) {
                yield put(actions.failFetchingMovieAwards('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failFetchingMovieAwards(non_field_errors[0]))
            }
        }
    } catch (error) {
        yield put(actions.failFetchingMovieAwards('Hubo un error :(' + error))
    }
}

export function* watchGetMovieAwardsStarted() {
    yield takeEvery(
        types.FETCH_MOVIE_AWARDS_STARTED,
        getMovieAwards,
    )
}

