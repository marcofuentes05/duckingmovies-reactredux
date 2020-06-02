import { fork, all} from 'redux-saga/effects'

import {
    watchLoginStarted
} from './auth';
import { watchSignUpStarted } from './signUp'; 
import { watchSeriesStarted } from './series';
import { watchGetMoviesStarted } from './movies';
import { watchGetVideogamesStarted } from './videogames';
import { watchGetMovieCommentsStarted } from './movieComments' 
import { watchFetchAllMoviesStarted } from './searchMovies';
import { watchGetSerieCommentsStarted, watchAddSerieCommentsStarted } from './serieComments'
import { watchGetGameCommentsStarted, watchAddGameCommentsStarted} from './gameComments'
import { watchAddMovieCommentsStarted } from './movieComments'


function* mainSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchSignUpStarted),
        fork(watchSeriesStarted),
        fork(watchGetMoviesStarted),
        fork(watchGetVideogamesStarted),
        fork(watchGetMovieCommentsStarted),
        fork(watchGetSerieCommentsStarted),
        fork(watchGetGameCommentsStarted),
        fork(watchFetchAllMoviesStarted),
        fork(watchAddMovieCommentsStarted),
        fork(watchAddSerieCommentsStarted),
        fork(watchAddGameCommentsStarted),
    ]);
}

export default mainSaga