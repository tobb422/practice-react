import React, { Component } from 'react';
import '../styles/pages/index.css';
import axios from 'axios';

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      books: [],
    }
    this.inputText = this.inputText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  // lifecycle 系
  async componentDidMount() {
    const result = await axios.get('https://www.googleapis.com/books/v1/volumes?q=React')
    this.setState({
      books: result.data.items.map(item => {
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

  // event 系
  inputText(e) {
    this.setState({ query: e.target.value })
  }

  async onSubmit() {
    const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`)
    this.setState({
      books: result.data.items.map(item => {
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

  // render 系
  renderBookList() {
    const books = this.state.books
    return books.map(book => {
      return (
        <div key={book.id} className="book">
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <img src={book.image} />
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
