import {
    call,
    takeEvery,
    put,
    select,
} from 'redux-saga/effects';

import { API_BASE_URL } from '../settings'

import { normalize } from 'normalizr'
import * as schemas from './../schemas/movies'

import * as selectors from '../reducers'
import * as types from '../types/movies'
import * as actions from '../actions/movies'

function* getMovies(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            console.log('ENTRAMOS A LA SAGA DE MOVIES', token)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/movies/trending`,
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
                    entities: { movies },
                    result 
                } = normalize(jsonResult, schemas.movies)
                yield put(actions.completeFetchingMovies(movies, result))
            } else if (response.status == 400) {
                yield put(actions.failFetchingMovies('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failFetchingMovies(non_field_errors[0]))
            }
        }
    } catch (error) {
        yield put(actions.failFetchingMovies('Hubo un error :('))
    }
}

export function* watchGetMoviesStarted() {
    yield takeEvery(
        types.FETCH_MOVIES_STARTED,
        getMovies,
    )
}