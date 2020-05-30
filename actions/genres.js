import * as types from './types/genres';

export const startFetchingGenres = () => ({
  type: types.FETCH_GENRES_STARTED,
});

export const completeFetchingGenres = (entities, order) => ({
  type: types.FETCH_GENRES_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingGenres = error => ({
  type: types.FETCH_GENRES_FAILED,
  payload: {
    error,
  }
});

export const startAddingGenre = genre => ({
  type: types.ADD_GENRE_STARTED,
  payload: genre
});

export const completeAddingGenre = (tempId, genre) => ({
  type: types.ADD_GENRE_COMPLETED,
  payload: {
    tempId,
    genre,
  }
});

export const failAddingGenre = error => ({
  type: types.ADD_GENRE_FAILED,
  payload: {
    error,
  }
});

export const startRemovingGenre = id => ({
  type: types.REMOVE_GENRE_STARTED,
  payload: {
    id,
  }
});

export const completeRemovingGenre = () => ({
  type: types.REMOVE_GENRE_COMPLETED,
});

export const failRemovingGenre = error => ({
  type: types.REMOVE_GENRE_FAILED,
  payload: {
    error,
  }
});


