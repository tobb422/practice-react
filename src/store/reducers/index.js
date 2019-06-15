import * as Types from '../types';

const initialState = {
  books: [],
};

export const searchBooksReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case Types.SEARCH_BOOKS:
      return Object.assign({}, state, payload)
    default:
      return state;
  }
}
