import * as Types from '../types';

const initialState = {
  query: 'React',
  books: [],
};

const indexReducer = (state = initialState, action) => {
  const { type, payload } = action
  console.log(state)
  switch (type) {
    case Types.SET_BOOKS:
      return Object.assign({}, state, payload)
    case Types.SET_QUERY:
      return Object.assign({}, state, payload)
    default:
      return state;
  }
}

export default indexReducer;
