import * as types from '../types/directors';

// MOVIE DIRECTOR
export const startFetchingMovieDirector = () => ({
  type: types.FETCH_MOVIE_DIRECTOR_STARTED,
});

export const completeFetchingMovieDirector = (entities) => ({
  type: types.FETCH_MOVIE_DIRECTOR_COMPLETED,
  payload: entities
});

export const failFetchingMovieDirector = error => ({
  type: types.FETCH_MOVIE_DIRECTOR_FAILED,
  payload: {
    error,
  }
});


// SERIE DIRECTOR

export const startFetchingSerieDirector = () => ({
    type: types.FETCH_SERIE_DIRECTOR_STARTED,
});

export const completeFetchingSerieDirector = (entities) => ({
    type: types.FETCH_SERIE_DIRECTOR_COMPLETED,
    payload: entities
});

export const failFetchingSerieDirector = error => ({
    type: types.FETCH_SERIE_DIRECTOR_FAILED,
    payload: {
        error,
    }
});