import React from 'react';
import '../styles/pages/index.css';

const Book = (props) => {
  const book = props.book
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>{book.description}</p>
      <img src={book.image} alt="本の画像" />
    </div>
  )
}

export default Book;
