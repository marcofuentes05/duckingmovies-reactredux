import * as types from './../types/searchSeries';

export const startFetchingSearchSeries = (genre, rating) => ({
  type: types.FETCH_SEARCH_SERIES_STARTED,
  payload: {
    genre,
    rating,
  }
});
export const completeFetchingSearchSeries = (entities, order) => ({
  type: types.FETCH_SEARCH_SERIES_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingSearchSeries = error => ({
  type: types.FETCH_SEARCH_SERIES_FAILED,
  payload: {
    error,
  }
});