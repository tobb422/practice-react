import fetch from 'isomorphic-unfetch';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import * as Types from '../types'
import * as actions from '../actions'

function* searchBooks() {
  const result = yield call(
    async params => {
      const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.query}`)
      const data = await result.json()
      return data.items.map(item => {
        const data = item.volumeInfo
        return {
          id:          item.id,
          title:       data.title,
          description: data.description,
          image:       data.imageLinks.thumbnail,
        }
      })
    },
    { query: yield select(state => state.index.query) }
  )
  yield put(actions.setBooks(result))
}

export default function* indexSage() {
  yield takeLatest(Types.ASYNC_SEARCH_BOOKS, searchBooks);
}
