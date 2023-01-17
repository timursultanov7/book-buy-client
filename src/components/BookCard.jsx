import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/book-card.css";

export const BookCard = ({ book }) => {
  return (
    <div className="book-card" key={book.book_id}>
      <Link className="card-link" to={`/book/${book.book_id}`}>
        <div className="book-img-wrapper">
          <img className="book-img" src={book.book_img} alt={book.book_name} />
        </div>
        <div className="book-card-info">
          <h3 className="book-title-card">{book.book_name}</h3>

          <p className="book-price">${book.book_price}</p>
        </div>
      </Link>
      <button className="buy-book-btn">Read</button>
    </div>
  );
};
