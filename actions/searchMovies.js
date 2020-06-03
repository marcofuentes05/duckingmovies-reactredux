import * as types from './../types/searchMovies';

export const startFetchingSearchMovies = (genre, rating) => ({
  type: types.FETCH_SEARCH_MOVIES_STARTED,
  payload: {
    genre,
    rating,
  }
});
export const completeFetchingSearchMovies = (entities, order) => ({
  type: types.FETCH_SEARCH_MOVIES_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingSearchMovies = error => ({
  type: types.FETCH_SEARCH_MOVIES_FAILED,
  payload: {
    error,
  }
});