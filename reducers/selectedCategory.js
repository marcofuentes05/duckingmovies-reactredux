import * as types from '../types/selectedCategory';

const selectedCategory = (state=null, action) => {
  switch(action.type) {
    case types.CATEGORY_SELECTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default selectedCategory;

export const getSelectedCategory = state => state;