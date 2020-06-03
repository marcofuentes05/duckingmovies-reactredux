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

function* getSerieDirector(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            const { id } = yield select(selectors.getSelectedItem)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/series/${id}/director`,
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
                yield put(actions.completeFetchingSerieDirector(jsonResult))
            } else if (response.status == 400) {
                yield put(actions.failFetchingSerieDirector('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failFetchingSerieDirector(non_field_errors))
            }
        }
    } catch (error) {
        yield put(actions.failFetchingSerieDirector('Hubo un error :(' + error))
    }
}

export function* watchGetSerieDirectorStarted() {
    yield takeEvery(
        types.FETCH_SERIE_DIRECTOR_STARTED,
        getSerieDirector,
    )
}

