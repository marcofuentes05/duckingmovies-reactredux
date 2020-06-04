import * as types from '../types/developers';

export const startFetchingDeveloper = () => ({
  type: types.FETCH_DEVELOPER_STARTED,
});

export const completeFetchingDeveloper = (entities) => ({
  type: types.FETCH_DEVELOPER_COMPLETED,
  payload: entities
  
});

export const failFetchingDeveloper = error => ({
  type: types.FETCH_DEVELOPER_FAILED,
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


