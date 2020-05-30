import * as types from './types/directors';

export const startFetchingDirectors = () => ({
  type: types.FETCH_DIRECTORS_STARTED,
});

export const completeFetchingDirectors = (entities, order) => ({
  type: types.FETCH_DIRECTORS_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingDirectors = error => ({
  type: types.FETCH_DIRECTORS_FAILED,
  payload: {
    error,
  }
});

export const startAddingDirector = director => ({
  type: types.ADD_DIRECTOR_STARTED,
  payload: director
});

export const completeAddingDirector = (tempId, director) => ({
  type: types.ADD_DIRECTOR_COMPLETED,
  payload: {
    tempId,
    director,
  }
});

export const failAddingDirector = error => ({
  type: types.ADD_DIRECTOR_FAILED,
  payload: {
    error,
  }
});

export const startRemovingDirector = id => ({
  type: types.REMOVE_DIRECTOR_STARTED,
  payload: {
    id,
  }
});

export const completeRemovingDirector = () => ({
  type: types.REMOVE_DIRECTOR_COMPLETED,
});

export const failRemovingDirector = error => ({
  type: types.REMOVE_DIRECTOR_FAILED,
  payload: {
    error,
  }
});


