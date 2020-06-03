import * as types from '../types/selectedCategory';

export const selectCategory = (category) => ({
  type: types.CATEGORY_SELECTED,
  payload: { category, },
});