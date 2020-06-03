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
import * as schemas from './../schemas/videogames'

import * as selectors from '../reducers';
import * as types from '../types/searchVideogames';
import * as actions from '../actions/searchVideogames';

function* searchVideogame (action) {
  try{
    const isAuth = yield select(selectors.isAuthenticated)
    if(isAuth){
      const token = yield select(selectors.getToken)
      const { genre, rating } = action.payload;
      const response = yield call(
        fetch,
        `${API_BASE_URL}/videogames/search/`,
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
          entities: { videogames },
          result 
        } = normalize(jsonResult, schemas.videogames)
        yield put(actions.completeFetchingSearchVideogames(videogames, result))
      }
      else {
          const non_field_errors = yield response.text();
          yield put(actions.failFetchingSearchVideogames(non_field_errors[0]))
      }
    }
  }catch(error){
    yield put(actions.failFetchingSearchVideogames('Hubo un error :('))
  }
};




export function* watchFetchSearchVideogamesStarted(){
  yield takeEvery(
      types.FETCH_SEARCH_VIDEOGAMES_STARTED,
      searchVideogame,
  )
}