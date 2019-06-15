import React, { Component } from 'react';
import '../styles/pages/index.css';
import axios from 'axios';

import Book from '../components/book';

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: 'React',
      books: [],
    }
    this.inputText = this.inputText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  // lifecycle 系
  async componentDidMount() {
    const result = await this.searchBooks()
    this.setBooks(result)
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

  setQuery(value) { this.setState({ query: value }) }

  // event 系
  inputText(e) { this.setQuery(e.target.value) }

  async onSubmit() {
    const result = await this.searchBooks()
    this.setBooks(result)
  }

  // method 系
  async searchBooks() {
    const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`)
    return result.data.items
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
    return (
      <main>
        <h1>本検索</h1>
        <div className="search">
          書籍名：<input type="text" value={this.state.query} onChange={this.inputText} />
          <input type="submit" onClick={this.onSubmit} />
        </div>
        <div className="wrapper">
          {this.renderBookList()}
        </div>
      </main>
    )
  }
}
