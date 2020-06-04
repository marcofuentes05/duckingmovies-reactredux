import * as types from '../types/consoles';

export const startFetchingConsoles = () => ({
  type: types.FETCH_CONSOLES_STARTED,
});

export const completeFetchingConsoles = (entities, order) => ({
  type: types.FETCH_CONSOLES_COMPLETED,
  payload: {
    entities,
    order,
  }
});

export const failFetchingConsoles = error => ({
  type: types.FETCH_CONSOLES_FAILED,
  payload: {
    error,
  }
});

export const startAddingConsole = console => ({
  type: types.ADD_CONSOLE_STARTED,
  payload: console
});

export const completeAddingConsole = (tempId, console) => ({
  type: types.ADD_CONSOLE_COMPLETED,
  payload: {
    tempId,
    console,
  }
});

export const failAddingConsole = error => ({
  type: types.ADD_CONSOLE_FAILED,
  payload: {
    error,
  }
});

export const startRemovingConsole = id => ({
  type: types.REMOVE_CONSOLE_STARTED,
  payload: {
    id,
  }
});

export const completeRemovingConsole = () => ({
  type: types.REMOVE_CONSOLE_COMPLETED,
});

export const failRemovingConsole = error => ({
  type: types.REMOVE_CONSOLE_FAILED,
  payload: {
    error,
  }
});


