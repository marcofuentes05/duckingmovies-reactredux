import * as types from './types/series';

export const startFetchingSeries = () => ({
  type: types.FETCH_SERIE_STARTED,
});
export const completeFetchingSeries = (entities, order) => ({
  type: types.FETCH_SERIES_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingSeries = error => ({
  type: types.FETCH_SERIES_FAILED,
  payload: {
    error,
  }
});

export const startAddingSerie = serie => ({
  type: types.ADD_SERIES_STARTED,
  payload: serie
});

export const completeAddingSerie = (tempId, serie) => ({
  type: types.ADD_SERIE_COMPLETED,
  payload: {
    tempId,
    serie,
  }
});

export const failAddingSerie = error => ({
  type: types.ADD_SERIE_FAILED,
  payload: {
    error,
  }
});

export const startRemovingSerie = id => ({
  type: types.REMOVE_SERIE_STARTED,
  payload: {
    id,
  }
});

export const completeRemovingSerie = () => ({
  type: types.REMOVE_SERIE_COMPLETED,
});

export const failRemovingSerie = error => ({
  type: types.REMOVE_SERIE_FAILED,
  payload: {
    error,
  }
});


