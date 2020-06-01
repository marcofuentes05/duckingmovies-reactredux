import * as types from '../types/selectedItem'

const selectedItem = ( state = null , action ) => {
    switch(action.type){
        case types.ITEM_SELECTED : {
            return action.payload
        }
        default : {
            return state;
        }
    }
}

export default selectedItem;

export const getSelectedItem = (state) => state;