import { fork, all} from 'redux-saga/effects'

import {
    watchLoginStarted
} from './auth';
import { watchSignUpStarted } from './signUp'; 
import { watchSeriesStarted } from './series';
import { watchGetMoviesStarted } from './movies';
import { watchGetVideogamesStarted } from './videogames';


function* mainSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchSignUpStarted),
        fork(watchSeriesStarted),
        fork(watchGetMoviesStarted),
        fork(watchGetVideogamesStarted),
    ]);
}

export default mainSaga