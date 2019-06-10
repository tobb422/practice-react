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
    this.setState({
      books: tmp.data.items.map(item => {
        return {
          id:          item.id,
          title:       item.volumeInfo.title,
          description: item.volumeInfo.description,
          image:       item.volumeInfo.imageLinks.thumbnail,
        }
      }),
    })
  }

  render() {
    const books = this.state.books
    return (
      <main>
        <h1>本検索</h1>
        <div className="wrapper">
          { books.map(book => {
            return (
              <div key={book.id} className="book">
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <img src={book.image} />
              </div>
            )
          })}
        </div>
      </main>
    )
  }
}
