import React, { useContext } from "react";
import { LoginModalContext } from "../context/LoginModalContext";
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";

import "../styles/book-card.css";

export const BookCard = ({ book }) => {
  const { handleShow } = useContext(LoginModalContext);

  const { isLoggedIn } = useContext(LoginContext);

  return (
    <div className="book-card" key={book.book_id}>
      <Link
        className="card-link card-link--book-card"
        to={`/book/${book.book_id}`}
      >
        <div className="book-img-wrapper">
          <img
            className="book-img-card"
            src={book.book_img}
            alt={book.book_name}
          />
        </div>
        <div className="book-card-info">
          <h3 className="book-title-card">{book.book_name}</h3>
        </div>
      </Link>

      <Link
        onClick={!isLoggedIn && handleShow}
        className="card-link card-link--book-card"
        to={isLoggedIn && `/read-book/${book.book_id}`}
      >
        <button className="buy-book-btn">Read</button>
      </Link>
    </div>
  );
};
