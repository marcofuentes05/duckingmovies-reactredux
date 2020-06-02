import { fork, all} from 'redux-saga/effects'

import {
    watchLoginStarted
} from './auth';
import { watchSignUpStarted } from './signUp'; 
import { watchSeriesStarted } from './series';
import { watchGetMoviesStarted } from './movies';
import { watchGetVideogamesStarted } from './videogames';
import { watchGetMovieCommentsStarted } from './movieComments' 
import { watchGetSerieCommentsStarted } from './serieComments'
import { watchGetGameCommentsStarted } from './gameComments';
import { watchFetchAllMoviesStarted } from './searchMovies';

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
    ]);
}

export default mainSaga