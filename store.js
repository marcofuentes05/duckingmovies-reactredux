import { createStore } from 'redux'
import reducer from './reducers'
// aqui pongo el metodo configureStore que solo retorna la creacion del state a partir de todos los reductores

export const configureState = () => {
    return createStore(reducer)
}