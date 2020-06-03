import {
  call,
  takeEvery,
  put,
  // race,
  // all,
  delay,
  select,
} from 'redux-saga/effects';

import { API_BASE_URL }  from '../settings';

import { normalize } from 'normalizr'
import * as schemas from './../schemas/series'

import * as selectors from '../reducers';
import * as types from '../types/searchSeries';
import * as actions from '../actions/searchSeries';

function* searchSeries (action) {
  try{
    const isAuth = yield select(selectors.isAuthenticated)
    if(isAuth){
      const token = yield select(selectors.getToken);
      const { genre, rating } = action.payload;
      const response = yield call(
        fetch,
        `${API_BASE_URL}/series/search/`,
        {
          method: 'GET',
          headers:{
            'Content-type': 'application/json',
            'Authorization': `JWT ${token}`,
            'GENRE': genre,
            'RATING': rating,
          },
        },
      );

      if(response.status == 200){
        const jsonResult = yield response.json();
        const {
          entities: { series },
          result 
        } = normalize(jsonResult, schemas.series)
        yield put(actions.completeFetchingSearchSeries(series, result))
      }
      else {
          const non_field_errors = yield response.text();
          yield put(actions.failFetchingSearchSeries(non_field_errors[0]))
      }
    }
  }catch(error){
    yield put(actions.failFetchingSearchSeries('Hubo un error :('))
  }
};




export function* watchFetchSearchSeriesStarted(){
  yield takeEvery(
      types.FETCH_SEARCH_SERIES_STARTED,
      searchSeries,
  )
}