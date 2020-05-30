import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from './types/movieProducers';

const byId = (state={}, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_PRODUCERS_COMPLETED: {
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
    case types.ADD_MOVIE_PRODUCER_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      }
      return newState;
    }
    case types.ADD_MOVIE_PRODUCER_COMPLETED: {
      const { tempId, movieProducer } = action.payload;
      const newState = omit(state, tempId);
      newState[movieProducer.id] = {
        ...movieProducer,
        isConfirmed: true,
      }
      return newState;
    }
    case types.REMOVE_MOVIE_PRODUCER_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state=[], action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_PRODUCERS_COMPLETED: {
      return [
        ...action.payload.order,
      ];
    }
    case types.ADD_MOVIE_PRODUCER_STARTED: {
      return [
        ...state,
        ...action.payload.id,
      ];
    }
    case types.ADD_MOVIE_PRODUCER_COMPLETED: {
      const { tempId, movieProducer } = action.payload;
      return state.map(id => id === tempId ? movieProducer.id : id);
    }
    case types.REMOVE_MOVIE_PRODUCER_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state=false , action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_PRODUCERS_STARTED: {
      return true;
    }
    case types.FETCH_MOVIE_PRODUCERS_COMPLETED: {
      return false;
    }
    case types.FETCH_MOVIE_PRODUCERS_FAILED: {
      return false;
    }
    default: {
      return state;
    } 
  }
};

const error = (state=null , action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_PRODUCERS_STARTED:
    case types.FETCH_MOVIE_PRODUCERS_COMPLETED:
    case types.ADD_MOVIE_PRODUCER_STARTED:
    case types.ADD_MOVIE_PRODUCER_COMPLETED:
    case types.REMOVE_MOVIE_PRODUCER_STARTED:
    case types.REMOVE_MOVIE_PRODUCER_COMPLETED:
      return null;
    case types.FETCH_MOVIE_PRODUCERS_FAILED:
    case types.ADD_MOVIE_PRODUCER_FAILED:
    case types.REMOVE_MOVIE_PRODUCER_FAILED:
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

export const getMovieProducer = (state, id) => state.byId[id];
export const getMovieProducers = state => state.order.map(id => getMovieProducer(state, id));
export const isFetchingMovieProducers = state => state.isFetching;
export const getMovieProducerError = state => state.error;