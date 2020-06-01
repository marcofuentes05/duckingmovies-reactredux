import * as types from '../types/comments';
// --------------------
// MOVIES COMMENTS
// --------------------
export const startFetchingMovieComments = () => ({
    type: types.FETCH_MOVIE_COMMENTS_STARTED,
});

export const completeFetchingMovieComments = (entities, order) => ({
    type: types.FETCH_MOVIE_COMMENTS_COMPLETED,
    payload: {
        entities,
        order,
    }
});

export const failFetchingMovieComments = error => ({
    type: types.FETCH_MOVIE_COMMENTS_FAILED,
    payload: {
        error,
    }
});

export const startAddingMovieComment= comment => ({
    type: types.ADD_MOVIE_COMMENT_STARTED,
    payload: comment
});

export const completeAddingMovieComment = (tempId, comment) => ({
    type: types.ADD_MOVIE_COMMENT_COMPLETED,
    payload: {
        tempId,
        comment,
    }
});

export const failAddingMovieComment = error => ({
    type: types.ADD_MOVIE_COMMENT_FAILED,
    payload: {
        error,
    }
});

export const startRemovingMovieComment = id => ({
    type: types.REMOVE_MOVIE_COMMENT_STARTED,
    payload: {
        id,
    }
});

export const completeRemovingMovieComment = () => ({
    type: types.REMOVE_MOVIE_COMMENT_COMPLETED,
});

export const failRemovingMovieComment = error => ({
    type: types.REMOVE_MOVIE_COMMENT_FAILED,
    payload: {
        error,
    }
});

// --------------------
// SERIE COMMENTS
// --------------------

export const startFetchingSerieComments = () => ({
    type: types.FETCH_SERIE_COMMENTS_STARTED,
});

export const completeFetchingSerieComments = (entities, order) => ({
    type: types.FETCH_SERIE_COMMENTS_COMPLETED,
    payload: {
        entities,
        order,
    }
});

export const failFetchingSerieComments = error => ({
    type: types.FETCH_SERIE_COMMENTS_FAILED,
    payload: {
        error,
    }
});

export const startAddingSerieComment = comment => ({
    type: types.ADD_SERIE_COMMENT_STARTED,
    payload: comment
});

export const completeAddingSerieComment = (tempId, comment) => ({
    type: types.ADD_SERIE_COMMENT_COMPLETED,
    payload: {
        tempId,
        comment,
    }
});

export const failAddingSerieComment = error => ({
    type: types.ADD_SERIE_COMMENT_FAILED,
    payload: {
        error,
    }
});

export const startRemovingSerieComment = id => ({
    type: types.REMOVE_SERIE_COMMENT_STARTED,
    payload: {
        id,
    }
});

export const completeRemovingSerieComment = () => ({
    type: types.REMOVE_SERIE_COMMENT_COMPLETED,
});

export const failRemovingSerieComment = error => ({
    type: types.REMOVE_SERIE_COMMENT_FAILED,
    payload: {
        error,
    }
});

// ----------------
// GAME COMMENTS
// ----------------


export const startFetchingGameComments = () => ({
    type: types.FETCH_GAME_COMMENTS_STARTED,
});

export const completeFetchingGameComments = (entities, order) => ({
    type: types.FETCH_GAME_COMMENTS_COMPLETED,
    payload: {
        entities,
        order,
    }
});

export const failFetchingGameComments = error => ({
    type: types.FETCH_GAME_COMMENTS_FAILED,
    payload: {
        error,
    }
});

export const startAddingGameComment = comment => ({
    type: types.ADD_GAME_COMMENT_STARTED,
    payload: comment
});

export const completeAddingGameComment = (tempId, comment) => ({
    type: types.ADD_GAME_COMMENT_COMPLETED,
    payload: {
        tempId,
        comment,
    }
});

export const failAddingGameComment = error => ({
    type: types.ADD_GAME_COMMENT_FAILED,
    payload: {
        error,
    }
});

export const startRemovingGameComment = id => ({
    type: types.REMOVE_GAME_COMMENT_STARTED,
    payload: {
        id,
    }
});

export const completeRemovingGameComment = () => ({
    type: types.REMOVE_GAME_COMMENT_COMPLETED,
});

export const failRemovingGameComment = error => ({
    type: types.REMOVE_GAME_COMMENT_FAILED,
    payload: {
        error,
    }
});