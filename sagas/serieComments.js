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

function* getSerieComments(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            const { id } = yield select(selectors.getSelectedItem)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/series/${id}/comments`,
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
                    entities: { comments },
                    result
                } = normalize(jsonResult, schemas.comments)
                yield put(actions.completeFetchingSerieComments(comments, result))
            } else if (response.status == 400) {
                yield put(actions.failFetchingSerieComments('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failFetchingSerieComments(non_field_errors[0]))
            }
        }
    } catch (error) {
        yield put(actions.failFetchingSerieComments('Hubo un error :(' + error))
    }
}

export function* watchGetSerieCommentsStarted() {
    yield takeEvery(
        types.FETCH_SERIE_COMMENTS_STARTED,
        getSerieComments,
    )
}


function* postSerieComment(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            const { id } = yield select(selectors.getSelectedItem)
            const uid = yield select(selectors.getAuthUserID)
            const payload = { ...action.payload, author: uid, text: action.payload.text }
            console.log('\n\n\n HOLA HOOA HOLA ', payload)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/series/${id}/comment/`,
                {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`
                    },
                }
            );
            if (response.status == 200) {
                const jsonResult = yield response.json();
                yield put(actions.completeAddingSerieComment(
                    action.payload.id,
                    jsonResult
                ))
            } else if (response.status == 400 || response.status === 401) {
                yield put(actions.failAddingSerieComment('No hay token'))
            }
            else {
                const non_field_errors = yield response.text();
                yield put(actions.failAddingSerieComment(non_field_errors[0]))
            }
        }
    } catch (error) {
        yield put(actions.failAddingSerieComment('Hubo un error :( ' + error))
    }
}

export function* watchAddSerieCommentsStarted() {
    yield takeEvery(
        types.ADD_SERIE_COMMENT_STARTED,
        postSerieComment,
    )
}