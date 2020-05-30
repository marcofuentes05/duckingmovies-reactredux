import { createStore , applyMiddleware , compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers'
import mainSaga from './sagas'
// aqui pongo el metodo configureStore que solo retorna la creacion del state a partir de todos los reductores

export const configureState = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer ,
        applyMiddleware(sagaMiddleware),
        );

        sagaMiddleware.run(mainSaga)
        return store
}