import * as types from './types/developers';

export const startFetchingDevelopers = () => ({
  type: types.FETCH_DEVELOPERS_STARTED,
});

export const completeFetchingDevelopers = (entities, order) => ({
  type: types.FETCH_DEVELOPERS_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingDevelopers = error => ({
  type: types.FETCH_DEVELOPERS_FAILED,
  payload: {
    error,
  }
});

export const startAddingDeveloper = developer => ({
  type: types.ADD_DEVELOPER_STARTED,
  payload: developer
});

export const completeAddingDeveloper = (tempId, developer) => ({
  type: types.ADD_DEVELOPER_COMPLETED,
  payload: {
    tempId,
    developer,
  }
});

export const failAddingDeveloper = error => ({
  type: types.ADD_DEVELOPER_FAILED,
  payload: {
    error,
  }
});

export const startRemovingDeveloper = id => ({
  type: types.REMOVE_DEVELOPER_STARTED,
  payload: {
    id,
  }
});

export const completeRemovingDeveloper = () => ({
  type: types.REMOVE_DEVELOPER_COMPLETED,
});

export const failRemovingDeveloper = error => ({
  type: types.REMOVE_DEVELOPER_FAILED,
  payload: {
    error,
  }
});


