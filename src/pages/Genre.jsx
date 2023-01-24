import React, { useContext, useState, useEffect } from "react";
import "../styles/genre.css";

import { GenreContext } from "../context/GenreContext";
import { useParams } from "react-router-dom";
import { BookCard } from "../components/BookCard";

import LoadingProgress from "../components/LoadingProgress";

export const Genre = () => {
  const params = useParams();

  const { genre, setGenre } = useContext(GenreContext);

  const [loading, setLoading] = useState(true);

  const getGenre = async () => {
    try {
      const res = await fetch(
        // `http://localhost:9000/api/books/${params.genre.toLowerCase()}`
        `https://book-buy-server.onrender.com/api/books/categories/${params.genre.toLowerCase()}`
      );

      const data = await res.json();

      setGenre(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGenre();
  }, [genre]);

  return (
    <div className="genre-container">
      <h1 className="heading-primary-genre">{params.genre}</h1>

      <div className="genre-books-wrapper">
        {loading ? (
          <LoadingProgress />
        ) : (
          genre.map((book) => {
            return <BookCard key={book.book_id} book={book} />;
          })
        )}
      </div>
    </div>
  );
};
