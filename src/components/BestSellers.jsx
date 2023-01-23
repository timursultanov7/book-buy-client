import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import { BookCard } from "./BookCard";
import "../styles/bestsellers.css";

export const BestSellers = () => {
  const { books } = useContext(BooksContext);

  return (
    <div className="bestsellers-wrapper">
      <h2 className="bestsellers-heading">Best Sellers</h2>
      <section className="bestsellers-container grid">
        <div className="book-grid">
          {books.slice(0, 4).map((book) => {
            return <BookCard key={book.book_id} book={book} />;
          })}
        </div>
      </section>
    </div>
  );
};
