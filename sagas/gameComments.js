import {
    call,
    takeEvery,
    put,
    select,
} from 'redux-saga/effects';

import { API_BASE_URL } from '../settings'

import { normalize } from 'normalizr'

import * as selectors from '../reducers'
import * as types from '../types/comments'
import * as actions from '../actions/comments'
import * as schemas from '../schemas/movieComments';

function* getGameComments(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            const { id } = yield select(selectors.getSelectedItem)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/videogames/${id}/comments`,
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
                    entities : { comments },
                    result
                } = normalize(jsonResult, schemas.comments)
                yield put(actions.completeFetchingGameComments(comments, result))
            } else if (response.status == 400) {
                yield put(actions.failFetchingGameComments('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failFetchingGameComments(non_field_errors[0]))
            }
        }
    } catch (error) {
        yield put(actions.failFetchingGameComments('Hubo un error :(' + error))
    }
}

export function* watchGetGameCommentsStarted() {
    yield takeEvery(
        types.FETCH_GAME_COMMENTS_STARTED,
        getGameComments,
    )
}