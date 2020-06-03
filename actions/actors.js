import * as types from '../types/actors';

export const startFetchingMovieActors = () => ({
    type : types.FETCH_MOVIE_ACTORS_STARTED,
})
export const completeFetchingMovieActors = ( entities, order ) => ({
    type : types.FETCH_MOVIE_ACTORS_COMPLETED,
    payload : {
        entities,
        order
    }
})
export const failFetchingMovieActors = (error) => ({
    type : types.FETCH_MOVIE_ACTORS_FAILED,
    payload : {
        error,
    }
})

// DE SERIES
export const startFetchingSerieActors = () => ({
    type: types.FETCH_SERIE_ACTORS_STARTED,
})
export const completeFetchingSerieActors = (entities, order) => ({
    type: types.FETCH_SERIE_ACTORS_COMPLETED,
    payload: {
        entities,
        order
    }
})
export const failFetchingSerieActors = (error) => ({
    type: types.FETCH_SERIE_ACTORS_FAILED,
    payload: {
        error,
    }
})





// POR SI DA TIEMPO
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

