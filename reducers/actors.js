import movieActors, * as movieActorsSelectors from './movieActors'
import serieActors, * as serieActorsSelectors from './serieActors'
import { combineReducers } from 'redux';

export default combineReducers({
    movieActors,
    serieActors,
})

export const getMovieActor = (state , id) => movieActorsSelectors.getActor(state.movieActors , id)
export const getMovieActors = state => movieActorsSelectors.getActors(state.movieActors)
export const getIsMovieFetchingActor = state => movieActorsSelectors.getIsFetchingActor(state.movieActors)
export const getMovieActorError = state => movieActorsSelectors.getActorError(state.movieActors)

export const getSerieActor = (state , id) => serieActorsSelectors.getActor(state.serieActors , id)
export const getSerieActors = state => serieActorsSelectors.getActors(state.serieActors)
export const getIsFetchingSerieActor = state => serieActorsSelectors.getIsFetchingActor(state.serieActors)
export const getSerieActorError = state => serieActorsSelectors.getActorError(state.serieActors)