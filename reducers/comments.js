import { combineReducers } from "redux"
import * as types from '../types/comments';
import movieComments , * as movieSelectors from './moviecomments'
import serieComments, * as serieSelectors from './seriecomments'
import gameComments, * as gameSelectors from './videogamecomments'
export default combineReducers({
    movieComments,
    serieComments,
    gameComments
}) 

export const getMovieComment = (state, id) => movieSelectors.getMovieComment(state.movieComments , id );
export const getMovieComments = state => movieSelectors.getMovieComments(state.movieComments)
export const isFetchingMovieComments = state => movieSelectors.isFetchingMovieComments(state.movieComments)
export const getMovieCommentError = state => movieSelectors.getMovieCommentError(state.movieComments)

export const getSerieComment = (state, id) => serieSelectors.getSerieComment(state.serieComments , id );
export const getSerieComments = state => serieSelectors.getSerieComments(state.serieComments)
export const isFetchingSerieComment = state => serieSelectors.isFetchingSerieComments(state.serieComments)
export const getSerieCommentError = state => serieSerieSelectors.getSerieCommentError(state.serieComments)

export const getGameComment = (state, id) => gameSelectors.getGameComment(state.gameComments , id );
export const getGameComments = state => gameSelectors.getGameComments(state.gameComments)
export const isFetchingGameComment = state => gameSelectors.isFetchingGameComments(state.gameComments)
export const getGameCommentError = state => gameSelectors.getGameCommentError(state.gameComments)
