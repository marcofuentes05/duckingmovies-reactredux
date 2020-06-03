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

export const startFetchingAllMovies = (genre, rating) => ({
  type: types.FETCH_ALL_MOVIES_STARTED,
  payload: {
    genre,
    rating,
  }
});
export const completeFetchingAllMovies = (entities, order) => ({
  type: types.FETCH_ALL_MOVIES_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingAllMovies = error => ({
  type: types.FETCH_ALL_MOVIES_FAILED,
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


export const startFetchMovieAward = () => ({
    type : FETCH_MOVIE_AWARDS_STARTED,
    payload : {

    }
})
export const CompleteFetchMovieAward = ( entities , order) => ({
    type : FETCH_MOVIE_AWARDS_COMPLETED,
    payload : {
        entites,
        order
    }
})
export const FailFetchMovieAward = error => ({
    type : FETCH_MOVIE_AWARDS_FAILED,
    payload : error
})