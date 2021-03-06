import {combineReducers} from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/actors';

const byId = (state = {} , action) => {
    switch(action.type){
        case types.FETCH_MOVIE_ACTORS_COMPLETED : {
            const newState = {...state}
            const { entities , order} = action.payload;
            order.forEach( id => {
                newState[id] = {
                    ...entities[id],
                    isConfirmed : true,
                }
            })
            return newState;
        }
        case types.ADD_MOVIE_ACTORS_STARTED : {
            const newState = {...state};
            newState[action.payload.id] = {
                ...action.payload,
                isConfirmed : true
            }
            return newState;
        }
        case types.ADD_MOVIE_ACTORS_COMPLETED : {
            const { tempId , actor } = action.payload;
            const newState = omit(state, tempId)
            newState[actor.id] = {
                ...actor,
                isConfirmed : true
            }
            return newState;
        }
        case types.REMOVE_MOVIE_ACTORS_STARTED : {
            return omit(state, action.payload.id)
        }
        default : {
            return state
        }
    }
};

const order = (state = [] , action) => {
    switch(action.type) {
        case types.FETCH_MOVIE_ACTORS_COMPLETED : {
            return [
                ...action.payload.order,
            ]
        }
        case types.ADD_MOVIE_ACTORS_STARTED : {
            return [
                ...state,
                ...action.payload.id,
            ]
        }
        case types.ADD_MOVIE_ACTORS_COMPLETED : {
            const {tempId, actor} = action.payload
            return state.map(id => id ===tempId ? actor.id : id);
        }
        case types.REMOVE_MOVIE_ACTORS_STARTED : {
            return state.filter(id => id !== action.payload.id)
        }
        default:{
            return state
        }
    }
}

const isFetching = (state = false , action) => {
    switch (action.type) {
        case types.FETCH_MOVIE_ACTORS_STARTED : {
            return true
        }
        case types.FETCH_MOVIE_ACTORS_COMPLETED : {
            return false
        }
        case types.FETCH_MOVIE_ACTORS_FAILED : {
            return false
        }
        default : {
            return state
        }
    }
}

const error = (state = null , action) => {
    switch (action.type){
        case types.FETCH_MOVIE_ACTORS_STARTED : 
        case types.FETCH_MOVIE_ACTORS_COMPLETED : 
        case types.ADD_MOVIE_ACTORS_STARTED : 
        case types.ADD_MOVIE_ACTORS_COMPLETED : 
        case types.REMOVE_MOVIE_ACTORS_STARTED : 
        case types.REMOVE_MOVIE_ACTORS_COMPLETED : 
            return null;
        case types.FETCH_MOVIE_ACTORS_FAILED : 
        case types.ADD_MOVIE_ACTORS_FAILED : 
        case types.REMOVE_MOVIE_ACTORS_FAILED : 
            return action.payload.error;
        default : {
            return state;
        }
    }
}

export default combineReducers({
    byId,
    order,
    isFetching,
    error,
});

export const getActor = (state , id) => state.byId[id];
export const getActors = (state) => state.order.map(id => getActor(state,id));
export const getIsFetchingActor = (state) => state.isFetching
export const getActorError = ( state ) => state.error;
