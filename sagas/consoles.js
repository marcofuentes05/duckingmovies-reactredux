import {
    call,
    takeEvery,
    put,
    select,
} from 'redux-saga/effects';

import { API_BASE_URL } from '../settings'

import { normalize } from 'normalizr'

import * as selectors from '../reducers'
import * as types from '../types/consoles'
import * as actions from '../actions/consoles'
import * as schemas from '../schemas/consoles';

function* getConsoles(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            const { id } = yield select(selectors.getSelectedItem)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/videogames/${id}/consoles`,
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
                    entities: { consoles },
                    result
                } = normalize(jsonResult, schemas.consoles)
                yield put(actions.completeFetchingConsoles(consoles, result))
            } else if (response.status == 400) {
                yield put(actions.failFetchingConsoles('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failFetchingConsoles(non_field_errors[0]))
            }
        }
    } catch (error) {
        yield put(actions.failFetchingConsoles('Hubo un error :(' + error))
    }
}

export function* watchGetConsolesStarted() {
    yield takeEvery(
        types.FETCH_CONSOLES_STARTED,
        getConsoles,
    )
}

