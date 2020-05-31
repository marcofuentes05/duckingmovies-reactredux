import { fork, all} from 'redux-saga/effects'

import {
    watchLoginStarted
} from './auth';
import { watchSignUpStarted } from './signUp'; 

function* mainSaga() {
    yield all([
        fork(watchLoginStarted),
        fork(watchSignUpStarted),
    ]);
}

export default mainSaga