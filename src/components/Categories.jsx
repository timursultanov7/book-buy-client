import React from "react";
import { Link } from "react-router-dom";
import "../styles/categories.css";

export const Categories = () => {
  const genres = [
    { genreName: "Fiction", id: 1 },
    { genreName: "Novel", id: 2 },
    { genreName: "Kids", id: 3 },
    { genreName: "Fantasy", id: 4 },
    { genreName: "History", id: 5 },
    { genreName: "Horror", id: 6 },
  ];

  return (
    <div className="categories-wrapper">
      <header className="category-header">
        <h2 className="secondary-heading">Genres</h2>
      </header>

      <div className="categories-container" id="genres">
        {genres.map((genre) => {
          return (
            <Link
              to={`/categories/${genre.genreName}`}
              key={genre.id}
              className="category"
            >
              <p className="category-title">{genre.genreName}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
