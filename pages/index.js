import React, { Component } from 'react';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/layouts/main'
// import '../styles/pages/index.css';

import Book from '../components/book';

class Index extends Component {
  constructor(props) {
    super(props)
    this.inputText = this.inputText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  static async getInitialProps() {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=React`)
    const data = await res.json()
    return {
      books: data.items.map(item => {
      const data = item.volumeInfo
      return {
        id: item.id,
        title: data.title,
        description: data.description,
        image: data.imageLinks.thumbnail,
      }
    })
    }
  }

  // setState
  setBooks(values) {
    this.props.actions.searchBooks(values.map(item => {
      const data = item.volumeInfo
      return {
        id: item.id,
        title: data.title,
        description: data.description,
        image: data.imageLinks.thumbnail,
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
    // const { state } = this.props
    return this.props.books.map(book => {
      return (
        <Book key={book.id} book={book}/>
      )
    })
  }

  renderContent() {
    const { state } = this.props
    console.log(this.props)
    return (
      <main>
        <h1>本検索</h1>
        <div className="search">
          {/*書籍名：<input type="text" value={state.query} onChange={this.inputText} />*/}
          {/*<input type="submit" onClick={this.onSubmit} />*/}
        </div>
        <div className="wrapper">
          {this.renderBookList()}
        </div>
      </main>
    )
  }


  render() {
    return <Layout content={this.renderContent()}/>
  }
}

export default withRouter(Index)