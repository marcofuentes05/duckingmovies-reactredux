import * as types from './types/movieProducers';

export const startFetchingMovieProducers = () => ({
  type: types.FETCH_MOVIE_PRODUCERS_STARTED,
});

export const completeFetchingMovieProducers = (entities, order) => ({
  type: types.FETCH_MOVIE_PRODUCERS_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingMovieProducers = error => ({
  type: types.FETCH_MOVIE_PRODUCERS_FAILED,
  payload: {
    error,
  }
});

export const startAddingMovieProducer = movieProducer => ({
  type: types.ADD_MOVIE_PRODUCER_STARTED,
  payload: movieProducer
});

export const completeAddingMovieProducer = (tempId, movieProducer) => ({
  type: types.ADD_MOVIE_PRODUCER_COMPLETED,
  payload: {
    tempId,
    movieProducer,
  }
});

export const failAddingMovieProducer = error => ({
  type: types.ADD_MOVIE_PRODUCER_FAILED,
  payload: {
    error,
  }
});

export const startRemovingMovieProducer = id => ({
  type: types.REMOVE_MOVIE_PRODUCER_STARTED,
  payload: {
    id,
  }
});

export const completeRemovingMovieProducer = () => ({
  type: types.REMOVE_MOVIE_PRODUCER_COMPLETED,
});

export const failRemovingMovieProducer = error => ({
  type: types.REMOVE_MOVIE_PRODUCER_FAILED,
  payload: {
    error,
  }
});


