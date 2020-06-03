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

function* getSerieAwards(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            console.log(token,'\n\n\n')
            const { id } = yield select(selectors.getSelectedItem)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/series/${id}/awards`,
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
                yield put(actions.completeFetchingSerieAwards(awards, result))
            } else if (response.status == 400) {
                yield put(actions.failFetchingSerieAwards('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failFetchingSerieAwards(non_field_errors))
            }
        }
    } catch (error) {
        yield put(actions.failFetchingSerieAwards('Hubo un error :(' + error))
    }
}

export function* watchGetSerieAwardsStarted() {
    yield takeEvery(
        types.FETCH_SERIE_AWARDS_STARTED,
        getSerieAwards,
    )
}

