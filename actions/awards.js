import * as types from './types/awards';

export const startFetchingAwards = () => ({
  type: types.FETCH_AWARDS_STARTED,
});

export const completeFetchingAwards = (entities, order) => ({
  type: types.FETCH_AWARDS_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingAwards = error => ({
  type: types.FETCH_AWARDS_FAILED,
  payload: {
    error,
  }
});

export const startAddingAward = award => ({
  type: types.ADD_AWARD_STARTED,
  payload: award
});

export const completeAddingAward = (tempId, award) => ({
  type: types.ADD_AWARD_COMPLETED,
  payload: {
    tempId,
    award,
  }
});

export const failAddingAward = error => ({
  type: types.ADD_AWARD_FAILED,
  payload: {
    error,
  }
});

export const startRemovingAward = id => ({
  type: types.REMOVE_AWARD_STARTED,
  payload: {
    id,
  }
});

export const completeRemovingAward = () => ({
  type: types.REMOVE_AWARD_COMPLETED,
});

export const failRemovingAward = error => ({
  type: types.REMOVE_AWARD_FAILED,
  payload: {
    error,
  }
});


