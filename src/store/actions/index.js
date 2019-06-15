import * as Types from '../types';

export const searchBooks = books => {
  return {
    type: Types.SEARCH_BOOKS,
    payload: { books: books }
  }
}
