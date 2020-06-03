import { combineReducers } from 'redux';
import movieDirector , * as movieDirectorSelectors from './movieDirector'
import serieDirector , * as serieDirectorSelectors from './serieDirector'

export default combineReducers({
    movieDirector,
    serieDirector
})

// MOVIE DIRECTOR SELECTORS
export const getMovieDirector = ( state) => movieDirectorSelectors.getDirector( state.movieDirector )
export const isFetchingMovieDirectors = ( state ) => movieDirectorSelectors.isFetchingDirectors( state.movieDirector )
export const getMovieDirectorError = ( state ) => movieDirectorSelectors.getDirectorError( state.movieDirector )


// SERIE DIRECTOR SELECTORS
export const getSerieDirector = (state) => serieDirectorSelectors.getDirector(state.serieDirector)
export const isFetchingSerieDirectors = (state) => serieDirectorSelectors.isFetchingDirectors(state.serieDirector)
export const getSerieDirectorError = (state) => serieDirectorSelectors.getDirectorError(state.serieDirector)