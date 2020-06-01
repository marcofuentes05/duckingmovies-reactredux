import * as types from '../types/videogames';

export const startFetchingVideogames = () => ({
  type: types.FETCH_VIDEOGAMES_STARTED,
});
export const completeFetchingVideogames = (entities, order) => ({
  type: types.FETCH_VIDEOGAMES_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingVideogames = error => ({
  type: types.FETCH_VIDEOGAMES_FAILED,
  payload: {
    error,
  }
});

export const startAddingVideogame = videogame => ({
  type: types.ADD_VIDEOGAME_STARTED,
  payload: videogame
});

export const completeAddingVideogame = (tempId, videogame) => ({
  type: types.ADD_VIDEOGAME_COMPLETED,
  payload: {
    tempId,
    videogame,
  }
});

export const failAddingVideogame = error => ({
  type: types.ADD_VIDEOGAME_FAILED,
  payload: {
    error,
  }
});

export const startRemovingVideogame = id => ({
  type: types.REMOVE_VIDEOGAME_STARTED,
  payload: {
    id,
  }
});

export const completeRemovingVideogame = () => ({
  type: types.REMOVE_VIDEOGAME_COMPLETED,
});

export const failRemovingVideogame = error => ({
  type: types.REMOVE_VIDEOGAME_FAILED,
  payload: {
    error,
  }
});


