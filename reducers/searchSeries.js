import { combineReducers } from 'redux';

import * as types from '../types/searchSeries';

const byId = (state={}, action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_SERIES_STARTED: {
      const newState = {};
      return newState;
    }
    
    case types.FETCH_SEARCH_SERIES_COMPLETED: {
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
    default: {
      return state;
    }
  }
};

const order = (state=[], action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_SERIES_STARTED: {
      return []
    }
    case types.FETCH_SEARCH_SERIES_COMPLETED: {
      return [
        ...action.payload.order,
      ];
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false, action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_SERIES_STARTED: {
      return true;
    }
    case types.FETCH_SEARCH_SERIES_COMPLETED: {
      return false;
    }
    case types.FETCH_SEARCH_SERIES_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state=null, action) => {
  switch(action.type) {
    case types.FETCH_SEARCH_SERIES_STARTED:
    case types.FETCH_SEARCH_SERIES_COMPLETED:
      return null;
    case types.FETCH_SEARCH_SERIES_FAILED:
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

export const getSearchSerie = (state, id) => state.byId[id];
export const getSearchSeries = state => state.order.map(id => getSearchSerie(state, id));
export const isFetchingSearchSeries = state => state.isFetching;
export const getSearchSerieError = state => state.error;