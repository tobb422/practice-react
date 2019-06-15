import * as Types from '../types';

export const asyncSearchBooks = _ => {
  return {
    type: Types.ASYNC_SEARCH_BOOKS
  }
}

export const setBooks = books => {
  return {
    type: Types.SET_BOOKS,
    payload: { books: books }
  }
}

export const setQuery = query => {
  return {
    type: Types.SET_QUERY,
    payload: { query: query }
  }
}
