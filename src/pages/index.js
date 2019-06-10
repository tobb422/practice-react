import React, { Component } from 'react';
import '../styles/pages/index.css';
import axios from 'axios';

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
    }
  }

  async componentDidMount() {
    const tmp = await axios.get('https://www.googleapis.com/books/v1/volumes?q=React')
    this.setState({ books: tmp.data.items })
  }

  render() {
    const books = this.state.books
    return (
      <main>
        <h1>本検索</h1>
        <div className="wrapper">
          { books.map(book => {
            const data = book.volumeInfo
            return (
              <div key={book.id} className="book">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <img src={data.imageLinks.thumbnail} />
              </div>
            )
          })}
        </div>
      </main>
    )
  }
}
