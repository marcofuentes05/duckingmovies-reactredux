import * as types from './../types/searchVideogames';

export const startFetchingSearchVideogames = (genre, rating) => ({
  type: types.FETCH_SEARCH_VIDEOGAMES_STARTED,
  payload: {
    genre,
    rating,
  }
});
export const completeFetchingSearchVideogames = (entities, order) => ({
  type: types.FETCH_SEARCH_VIDEOGAMES_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingSearchVideogames = error => ({
  type: types.FETCH_SEARCH_VIDEOGAMES_FAILED,
  payload: {
    error,
  }
});