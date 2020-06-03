import * as types from '../types/awards';

export const startFetchingMovieAwards = () => ({
  type: types.FETCH_MOVIE_AWARDS_STARTED,
});

export const completeFetchingMovieAwards = (entities, order) => ({
  type: types.FETCH_MOVIE_AWARDS_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingMovieAwards = error => ({
  type: types.FETCH_MOVIE_AWARDS_FAILED,
  payload: {
    error,
  }
});

export const startAddingMovieAward = award => ({
  type: types.ADD_MOVIE_AWARD_STARTED,
  payload: award
});

export const completeAddingMovieAward = (tempId, award) => ({
  type: types.ADD_MOVIE_AWARD_COMPLETED,
  payload: {
    tempId,
    award,
  }
});

export const failAddingMovieAward = error => ({
  type: types.ADD_MOVIE_AWARD_FAILED,
  payload: {
    error,
  }
});

export const startRemovingMovieAward = id => ({
  type: types.REMOVE_MOVIE_AWARD_STARTED,
  payload: {
    id,
  }
});

export const completeRemovingMovieAward = () => ({
  type: types.REMOVE_MOVIE_AWARD_COMPLETED,
});

export const failRemovingMovieAward = error => ({
  type: types.REMOVE_MOVIE_AWARD_FAILED,
  payload: {
    error,
  }
});

//------------------------------------------------------------------------
//
//                             SERIE AWARDS
//
//------------------------------------------------------------------------

export const startFetchingSerieAwards = () => ({
    type: types.FETCH_SERIE_AWARDS_STARTED,
});

export const completeFetchingSerieAwards = (entities, order) => ({
    type: types.FETCH_SERIE_AWARDS_COMPLETED,
    payload: {
        entities,
        order,
    }
});

export const failFetchingSerieAwards = error => ({
    type: types.FETCH_SERIE_AWARDS_FAILED,
    payload: {
        error,
    }
});

export const startAddingSerieAward = award => ({
    type: types.ADD_SERIE_AWARD_STARTED,
    payload: award
});

export const completeAddingSerieAward = (tempId, award) => ({
    type: types.ADD_SERIE_AWARD_COMPLETED,
    payload: {
        tempId,
        award,
    }
});

export const failAddingSerieAward = error => ({
    type: types.ADD_SERIE_AWARD_FAILED,
    payload: {
        error,
    }
});

export const startRemovingSerieAward = id => ({
    type: types.REMOVE_SERIE_AWARD_STARTED,
    payload: {
        id,
    }
});

export const completeRemovingSerieAward = () => ({
    type: types.REMOVE_SERIE_AWARD_COMPLETED,
});

export const failRemovingSerieAward = error => ({
    type: types.REMOVE_SERIE_AWARD_FAILED,
    payload: {
        error,
    }
});


