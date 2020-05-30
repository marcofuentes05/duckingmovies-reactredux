import * as types from './types/comments';

export const startFetchingComments = () => ({
    type: types.FETCH_COMMENTS_STARTED,
});

export const completeFetchingComments = (entities, order) => ({
    type: types.FETCH_COMMENTS_COMPLETED,
    payload: {
        entities,
        order,
    }
});

export const failFetchingComments = error => ({
    type: types.FETCH_COMMENTS_FAILED,
    payload: {
        error,
    }
});

export const startAddingComment= comment => ({
    type: types.ADD_COMMENT_STARTED,
    payload: comment
});

export const completeAddingComment = (tempId, comment) => ({
    type: types.ADD_COMMENT_COMPLETED,
    payload: {
        tempId,
        comment,
    }
});

export const failAddingComment = error => ({
    type: types.ADD_COMMENT_FAILED,
    payload: {
        error,
    }
});

export const startRemovingComment = id => ({
    type: types.REMOVE_COMMENT_STARTED,
    payload: {
        id,
    }
});

export const completeRemovingComment = () => ({
    type: types.REMOVE_COMMENT_COMPLETED,
});

export const failRemovingComment = error => ({
    type: types.REMOVE_COMMENT_FAILED,
    payload: {
        error,
    }
});


