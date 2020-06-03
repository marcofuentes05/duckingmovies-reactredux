import movieAwards  , * as movieAwardsSelectors from './movieAwards'
import serieAwards , * as serieAwardsSelectors from './serieawards'
import { combineReducers } from 'redux';

export default combineReducers({
    movieAwards,
    serieAwards
})
// -----------------------------------------
// MOVIE AWARDS SELECTORS
// -----------------------------------------
export const getMovieAward = (state, id) => movieAwardsSelectors.getAward(state.movieAwards , id)
export const getMovieAwards = state => movieAwardsSelectors.getAwards(state.movieAwards)
export const isFetchingMovieAwards = state => movieAwardsSelectors.isFetchingAwards(state.movieAwards)
export const getMovieAwardError = state => movieAwardsSelectors.getAwardError(state.movieAwards)

// -----------------------------------------
// SERIE AWARD SELECTORS
// -----------------------------------------

export const getSerieAward = (state, id) => serieAwardsSelectors.getAward(state.serieAwards, id)
export const getSerieAwards = state => serieAwardsSelectors.getAwards(state.serieAwards)
export const isFetchingSerieAwards = state => serieAwardsSelectors.isFetchingAwards(state.serieAwards)
export const getSerieAwardError = state => serieAwardsSelectors.getAwardError(state.serieAwards)