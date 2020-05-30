import * as types from './types/actors';

export const startFetchingActors = () => ({
    type : types.FETCH_ACTORS_STARTED,
})
export const completeFetchingActors = ( entities, order ) => ({
    type : types.FETCH_ACTORS_COMPLETED,
    payload : {
        entities,
        order
    }
})
export const failFetchingActors = (error) => ({
    type : types.FETCH_ACTORS_FAILED,
    payload : {
        error,
    }
})

export const startAddingActors = ( actor ) => ({
    type : types.ADD_ACTORS_STARTED,
    payload : actor
})
export const completeAddingActors = (tempId , actor) => ({
    type : types.ADD_ACTORS_COMPLETED,
    payload : {
        tempId, 
        serie
    }
})
export const failAddingActors = (error ) => ({
    type : types.ADD_ACTORS_FAILED,
    payload : {
        error,
    }
})
export const startRemovingActors = id => ({
    type : types.REMOVE_ACTORS_STARTED,
    payload : {
        id ,
    }
})
export const completeRemovingActors = () => ({
    type : types.REMOVE_ACTORS_COMPLETED,
})
export const failRemovingActors = error => ({
    type : types.REMOVE_ACTORS_FAILED,
    payload : {
        error
    }
})

