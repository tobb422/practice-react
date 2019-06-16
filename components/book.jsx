import React from 'react';
import Link from "next/link"

const Book = (props) => {
  const book = props.book
  return (
    <Link href="/books/aiueo">
      <div className="book">
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <img src={book.image} alt="本の画像" />
      </div>
    </Link>
  )
}

export default Book;
