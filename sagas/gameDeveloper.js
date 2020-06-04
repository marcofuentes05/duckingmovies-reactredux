import {
  call,
  takeEvery,
  put,
  select,
} from 'redux-saga/effects';

import { API_BASE_URL } from '../settings';
import { normalize } from 'normalizr'

import * as selectors from '../reducers';
import * as types from '../types/developers';
import * as actions from '../actions/developers';
import * as schemas from '../schemas/developers';

function* fetchGameDeveloper(action) {
  try {
    const isAuth = yield select(selectors.isAuthenticated)
    if(isAuth) {
      const token = yield select(selectors.getToken);
      const { id } = yield select(selectors.getSelectedItem);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/videogames/${id}/developer`,
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
        yield put(actions.completeFetchingDeveloper(jsonResult))
      } else if (response.status == 400) {
        yield put(actions.failFetchingDeveloper('No hay token'))
      }
      else {
        const non_field_errors = yield response.text();
        yield put(actions.failFetchingDeveloper(non_field_errors[0]))
      }

    }
  }catch(error){
    yield put(actions.failFetchingDeveloper('Hubo un error' + error))

  }
};

export function* watchFetchGameDeveloperStarted() {
  yield takeEvery(
    types.FETCH_DEVELOPER_STARTED,
    fetchGameDeveloper,
  )
};