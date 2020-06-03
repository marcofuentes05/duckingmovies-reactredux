import * as types from './types/directors';

export const startFetchingMovieDirectors = () => ({
  type: types.FETCH_MOVIE_DIRECTORS_STARTED,
});

export const completeFetchingMovieDirectors = (entities, order) => ({
  type: types.FETCH_MOVIE_DIRECTORS_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingMovieDirectors = error => ({
  type: types.FETCH_MOVIE_DIRECTORS_FAILED,
  payload: {
    error,
  }
});


// SERIE DIRECTOR

export const startFetchingSerieDirectors = () => ({
    type: types.FETCH_SERIE_DIRECTORS_STARTED,
});

export const completeFetchingSerieDirectors = (entities, order) => ({
    type: types.FETCH_SERIE_DIRECTORS_COMPLETED,
    payload: {
        entities,
        order,
    }
});

export const failFetchingSerieDirectors = error => ({
    type: types.FETCH_SERIE_DIRECTORS_FAILED,
    payload: {
        error,
    }
});
//-----------------------------------------------
//
//              POR SI DA TIEMPO
//
// ----------------------------------------------

export const startAddingSerieDirector = director => ({
  type: types.ADD_MOVIE_DIRECTOR_STARTED,
  payload: director
});

export const completeAddingMovieDirector = (tempId, director) => ({
  type: types.ADD_MOVIE_DIRECTOR_COMPLETED,
  payload: {
    tempId,
    director,
  }
});

export const failAddingMovieDirector = error => ({
  type: types.ADD_MOVIE_DIRECTOR_FAILED,
  payload: {
    error,
  }
});

export const startRemovingMovieDirector = id => ({
  type: types.REMOVE_MOVIE_DIRECTOR_STARTED,
  payload: {
    id,
  }
});

export const completeRemovingMovieDirector = () => ({
  type: types.REMOVE_MOVIE_DIRECTOR_COMPLETED,
});

export const failRemovingMovieDirector = error => ({
  type: types.REMOVE_MOVIE_DIRECTOR_FAILED,
  payload: {
    error,
  }
});


