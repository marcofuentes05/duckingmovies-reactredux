import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/series';

const byId = (state={}, action) => {
  switch (action.type) {
    case types.FETCH_SERIES_COMPLETED: {
      const newState = { ...state };
      const { entities, order } = action.payload;
      order.forEach(id =>{
        newState[id] = {
          ...entities[id],
          isConfirmed: true,
        }
      });
      return newState;
    }
    case types.ADD_SERIE_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      }
      return newState;
    }
    case types.ADD_SERIE_COMPLETED: {
      const { tempId, serie } = action.payload;
      const newState = omit(state, tempId);
      newState[serie.id] = {
        ...serie,
        isConfirmed: true,
      }
      return newState;
    }
    case types.REMOVE_SERIE_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state=[], action) => {
  switch (action.type) {
    case types.FETCH_SERIES_COMPLETED: {
      return [
        ...action.payload.order,
      ];
    }
    case types.ADD_SERIE_STARTED: {
      return [
        ...state,
        ...action.payload.id,
      ];
    }
    case types.ADD_SERIE_COMPLETED: {
      const { tempId, serie } = action.payload;
      return state.map(id => id === tempId ? serie.id : id);
    }
    case types.REMOVE_SERIE_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false , action) => {
  switch (action.type) {
    case types.FETCH_SERIES_STARTED: {
      return true;
    }
    case types.FETCH_SERIES_COMPLETED: {
      return false;
    }
    case types.FETCH_SERIES_FAILED: {
      return false;
    }
    default: {
      return state;
    } 
  }
};

const error = (state=null , action) => {
  switch (action.type) {
    case types.FETCH_SERIES_STARTED:
    case types.FETCH_SERIES_COMPLETED:
    case types.ADD_SERIE_STARTED:
    case types.ADD_SERIE_COMPLETED:
    case types.REMOVE_SERIE_STARTED:
    case types.REMOVE_SERIE_COMPLETED:
      return null;
    case types.FETCH_SERIES_FAILED:
    case types.ADD_SERIE_FAILED:
    case types.REMOVE_SERIE_FAILED:
      return action.payload.error;
    default: {
      return state;
    }
  }
};

export default combineReducers({
  byId,
  order,
  isFetching,
  error,
});

export const getSerie = (state, id) => state.byId[id];
export const getSeries = state => state.order.map(id => getSerie(state, id));
export const isFetchingSerie = state => state.isFetching;
export const getSerieError = state => state.error;