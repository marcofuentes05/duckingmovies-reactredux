import { fork, all} from 'redux-saga/effects'

import {
    watchLoginStarted,
    watchRefreshTokenStarted,
} from './auth';
import { watchSignUpStarted } from './signUp'; 
import { watchSeriesStarted } from './series';
import { watchGetMoviesStarted } from './movies';
import { watchGetVideogamesStarted } from './videogames';
import { watchGetMovieCommentsStarted } from './movieComments' 
import { watchFetchSearchMoviesStarted } from './searchMovies';
import { watchGetSerieCommentsStarted, watchAddSerieCommentsStarted } from './serieComments'
import { watchGetGameCommentsStarted, watchAddGameCommentsStarted} from './gameComments'
import { watchAddMovieCommentsStarted } from './movieComments'
import { watchGetSerieAwardsStarted } from './serieAwards'
import { watchGetMovieAwardsStarted } from './movieAwards'
import { watchGetMovieActorsStarted } from './movieActors'
import { watchGetSerieActorsStarted } from './serieActors'
import { watchFetchSearchSeriesStarted } from './searchSeries';
import { watchFetchSearchVideogamesStarted } from './searchVideogames';


function* mainSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchRefreshTokenStarted),
        fork(watchSignUpStarted),
        fork(watchSeriesStarted),
        fork(watchGetMoviesStarted),
        fork(watchGetVideogamesStarted),
        fork(watchGetMovieCommentsStarted),
        fork(watchGetSerieCommentsStarted),
        fork(watchGetGameCommentsStarted),
        fork(watchFetchSearchMoviesStarted),
        fork(watchAddMovieCommentsStarted),
        fork(watchAddSerieCommentsStarted),
        fork(watchAddGameCommentsStarted),
        fork(watchGetSerieAwardsStarted),
        fork(watchGetMovieAwardsStarted),
        fork(watchGetMovieActorsStarted),
        fork(watchGetSerieActorsStarted),
        fork(watchFetchSearchSeriesStarted),
        fork(watchFetchSearchVideogamesStarted),
    ]);
}

export default mainSaga