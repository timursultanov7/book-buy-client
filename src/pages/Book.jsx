import React, { useEffect, useState, useContext } from "react";
import { LoginModalContext } from "../context/LoginModalContext";
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SingleBookContext } from "../context/SingleBookContext";
import "../styles/book.css";

export const Book = () => {
  const { singleBook, setSingleBook } = useContext(SingleBookContext);
  const { handleShow } = useContext(LoginModalContext);

  const { isLoggedIn } = useContext(LoginContext);

  const params = useParams();

  useEffect(() => {
    const getSingleBook = async () => {
      try {
        const res = await fetch(
          `http://localhost:9000/api/books/book/${params.id}`
        );

        const data = await res.json();

        setSingleBook(data);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleBook();
  }, [params]);

  return (
    <div>
      {singleBook.map((book) => {
        return (
          <div className="single-book-wrapper" key={book.book_id}>
            <img className="book-img" src={book.book_img} />
            <div className="single-book-author-title">
              <div>
                <h2 className="book-author">{book.book_author}</h2>
                <h3 className="book-title">{book.book_name}</h3>
              </div>
              <Link
                onClick={!isLoggedIn && handleShow}
                className="card-link"
                to={isLoggedIn && `/read-book/${book.book_id}`}
              >
                <button className="buy-book-btn single-book-btn">Read</button>
              </Link>
            </div>
            <p className="book-description">{book.book_description}</p>
          </div>
        );
      })}
    </div>
  );
};
