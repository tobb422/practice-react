import React, { Component } from 'react';
import '../styles/pages/index.css';

import Book from '../components/book';

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.inputText = this.inputText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  // lifecycle 系
  componentDidMount() {
    this.searchBooks()
  }

  // setState
  setBooks(values) {
    this.props.actions.searchBooks(values.map(item => {
      const data = item.volumeInfo
      return {
        id:          item.id,
        title:       data.title,
        description: data.description,
        image:       data.imageLinks.thumbnail,
      }
    }))
  }

  // event 系
  inputText(e) {
    const { actions } = this.props
    actions.setQuery(e.target.value)
  }

  onSubmit() {
    this.searchBooks()
  }

  // method 系
  searchBooks() {
    this.props.actions.asyncSearchBooks()
  }

  // render 系
  renderBookList() {
    const { state } = this.props
    return state.books.map(book => {
      return (
        <Book key={book.id} book={book} />
      )
    })
  }

  render() {
    const { state } = this.props
    return (
      <main>
        <h1>本検索</h1>
        <div className="search">
          書籍名：<input type="text" value={state.query} onChange={this.inputText} />
          <input type="submit" onClick={this.onSubmit} />
        </div>
        <div className="wrapper">
          {this.renderBookList()}
        </div>
      </main>
    )
  }
}
