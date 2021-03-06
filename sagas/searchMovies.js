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
import * as types from '../types/searchMovies';
import * as actions from '../actions/searchMovies';

function* searchMovies (action) {
  try{
    const isAuth = yield select(selectors.isAuthenticated)
    if(isAuth){
      const token = yield select(selectors.getToken)
      const { genre, rating } = action.payload;
      const response = yield call(
        fetch,
        `${API_BASE_URL}/movies/search/`,
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
          entities: { movies },
          result 
        } = normalize(jsonResult, schemas.movies)
        yield put(actions.completeFetchingSearchMovies(movies, result))
      }
      else {
          const non_field_errors = yield response.text();
          yield put(actions.failFetchingSearchMovies(non_field_errors[0]))
      }
    }
  }catch(error){
    yield put(actions.failFetchingSearchMovies('Hubo un error :('))
  }
};




export function* watchFetchSearchMoviesStarted(){
  yield takeEvery(
      types.FETCH_SEARCH_MOVIES_STARTED,
      searchMovies,
  )
}