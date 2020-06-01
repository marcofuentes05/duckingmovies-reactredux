import * as types from '../types/selectedItem'

export const selectItem = ( item ) => ({
    type : types.ITEM_SELECTED,
    payload : item
})