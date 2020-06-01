import * as types from './../types/movies';

export const startFetchingMovies = () => ({
  type: types.FETCH_MOVIES_STARTED,
});
export const completeFetchingMovies = (entities, order) => ({
  type: types.FETCH_MOVIES_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingMovies = error => ({
  type: types.FETCH_MOVIES_FAILED,
  payload: {
    error,
  }
});

export const startAddingMovie = movie => ({
  type: types.ADD_MOVIE_STARTED,
  payload: movie
});

export const completeAddingMovie = (tempId, movie) => ({
  type: types.ADD_MOVIE_COMPLETED,
  payload: {
    tempId,
    movie,
  }
});

export const failAddingMovie = error => ({
  type: types.ADD_MOVIE_FAILED,
  payload: {
    error,
  }
});

export const startRemovingMovie = id => ({
  type: types.REMOVE_MOVIE_STARTED,
  payload: {
    id,
  }
});

export const completeRemovingMovie = () => ({
  type: types.REMOVE_MOVIE_COMPLETED,
});

export const failRemovingMovie = error => ({
  type: types.REMOVE_MOVIE_FAILED,
  payload: {
    error,
  }
});


