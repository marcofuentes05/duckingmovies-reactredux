import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from './types/comments';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_COMMENTS_COMPLETED: {
            const newState = { ...state };
            const { entities, order } = action.payload;
            order.forEach(id => {
                newState[id] = {
                    ...entities[id],
                    isConfirmed: true,
                }
            });
            return newState;
        }
        case types.ADD_COMMENT_STARTED: {
            const newState = { ...state };
            newState[action.payload.id] = {
                ...action.payload,
                isConfirmed: false,
            }
            return newState;
        }
        case types.ADD_COMMENT_COMPLETED: {
            const { tempId, comment } = action.payload;
            const newState = omit(state, tempId);
            newState[comment.id] = {
                ...comment,
                isConfirmed: true,
            }
            return newState;
        }
        case types.REMOVE_COMMENT_STARTED: {
            return omit(state, action.payload.id);
        }
        default: {
            return state;
        }
    }
};

const order = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_COMMENTS_COMPLETED: {
            return [
                ...action.payload.order,
            ];
        }
        case types.ADD_COMMENT_STARTED: {
            return [
                ...state,
                ...action.payload.id,
            ];
        }
        case types.ADD_COMMENT_COMPLETED: {
            const { tempId, comment } = action.payload;
            return state.map(id => id === tempId ? comment.id : id);
        }
        case types.REMOVE_COMMENT_STARTED: {
            return state.filter(id => id !== action.payload.id);
        }
        default: {
            return state;
        }
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.FETCH_COMMENTS_STARTED: {
            return true;
        }
        case types.FETCH_COMMENTS_COMPLETED: {
            return false;
        }
        case types.FETCH_COMMENTS_FAILED: {
            return false;
        }
        default: {
            return state;
        }
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case types.FETCH_COMMENTS_STARTED:
        case types.FETCH_COMMENTS_COMPLETED:
        case types.ADD_COMMENT_STARTED:
        case types.ADD_COMMENT_COMPLETED:
        case types.REMOVE_COMMENT_STARTED:
        case types.REMOVE_COMMENT_COMPLETED:
            return null;
        case types.FETCH_COMMENTS_FAILED:
        case types.ADD_COMMENT_FAILED:
        case types.REMOVE_COMMENT_FAILED:
            return action.payload.error;
        default: {
            return state;
        }
    }
};

export default combineReducers({
    byId,
    order,
    isFetching,
    error,
});

export const getComment = (state, id) => state.byId[id];
export const getComments = state => state.order.map(id => getComment(state, id));
export const isFetchingComments = state => state.isFetching;
export const getCommentError = state => state.error;