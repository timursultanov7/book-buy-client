import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { SingleBookContext } from "../context/SingleBookContext";

export const Book = () => {
  const { singleBook, setSingleBook } = useContext(SingleBookContext);

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
            <h2 className="book-author">{book.book_author}</h2>
            <h3 className="book-title">{book.book_name}</h3>
            <p className="book-price">${book.book_price}</p>
            <p className="book-description">{book.book_description}</p>
          </div>
        );
      })}
    </div>
  );
};
