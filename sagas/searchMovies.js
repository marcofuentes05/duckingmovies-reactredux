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
import * as schemas from './../schemas/movies'

import * as selectors from '../reducers';
import * as types from '../types/movies';
import * as actions from '../actions/movies';

function* search (action) {
  try{
    const { genre, rating } = action.payload;
    const response = yield call(
      fetch,
      `${API_BASE_URL}/movies/search/`,
      {
        method: 'GET',
        headers:{
          'Content-type': 'application/json',
          'GENRE': genre,
          'RATING': rating,
        },
      },
    );

    if(response.status == 200){
      const jsonResult = yield response.json();
      const {
        entities: { movies },
        result 
      } = normalize(jsonResult, schemas.movies)
      yield put(actions.completeFetchingAllMovies(movies, result))
    }
    else {
        const non_field_errors = yield response.text();
        yield put(actions.failFetchingAllMovies(non_field_errors[0]))
    }
  }catch(error){
    yield put(actions.failFetchingAllMovies('Hubo un error :('))
  }
};




export function* watchFetchAllMoviesStarted(){
  yield takeEvery(
      types.FETCH_ALL_MOVIES_STARTED,
      search,
  )
}