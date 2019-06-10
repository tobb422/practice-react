import React, { Component } from 'react';
import '../styles/pages/index.css';
import axios from 'axios';

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
    this.setBooks(result.data.items)
  }

  // setState
  setBooks(values) {
    this.setState({
      books: values.map(item => {
        const data = item.volumeInfo
        return {
          id:          item.id,
          title:       data.title,
          description: data.description,
          image:       data.imageLinks.thumbnail,
        }
      }),
    })
  }

  setQuery(value) { this.setState({ query: value }) }

  // event 系
  inputText(e) { this.setQuery(e.target.value) }

  async onSubmit() {
    const result = await this.searchBooks()
    this.setBooks(result.data.items)
  }

  // method 系
  async searchBooks() {
    return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`)
  }

  // render 系
  renderBookList() {
    const books = this.state.books
    return books.map(book => {
      return (
        <div key={book.id} className="book">
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <img src={book.image} alt="本の画像" />
        </div>
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
