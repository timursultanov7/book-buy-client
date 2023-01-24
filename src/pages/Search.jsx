import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { BooksContext } from "../context/BooksContext";
import { LoginContext } from "../context/LoginContext";
import { LoginModalContext } from "../context/LoginModalContext";

const genres = [
  { genreName: "Fiction", id: 1 },
  { genreName: "Novel", id: 2 },
  { genreName: "Kids", id: 3 },
  { genreName: "Fantasy", id: 4 },
  { genreName: "History", id: 5 },
  { genreName: "Horror", id: 6 },
];

const Search = () => {
  const [searchState, setSearchState] = useState("");

  const { books } = useContext(BooksContext);

  const { handleShow } = useContext(LoginModalContext);

  const { isLoggedIn } = useContext(LoginContext);

  const displaySearchBooks = () => {
    const filterByName = books
      .filter((book) => {
        const bookName = book.book_name
          .toLowerCase()
          .includes(searchState.toLowerCase());

        const bookGenre = book.book_genre
          .toLowerCase()
          .includes(searchState.toLowerCase());
        const bookAuthor = book.book_author
          .toLowerCase()
          .includes(searchState.toLowerCase());

        return bookName || bookGenre || bookAuthor;
      })
      .map((book) => {
        return (
          <div className="book-card-search" key={book.book_id}>
            <div className="grid-search-card">
              <Link className="card-link-search" to={`/book/${book.book_id}`}>
                <div className="book-img-wrapper">
                  <img
                    className="book-img book-img-search"
                    src={book.book_img}
                    alt={book.book_name}
                  />
                </div>
              </Link>

              <div className="book-card-info--search">
                <div className="search-headings-wrapper">
                  <h3 className="search-secondary-heading">
                    {book.book_author}
                  </h3>
                  <h2 className="search-tertiary-heading">{book.book_name}</h2>
                  <h4 className="search-genre-heading">{book.book_genre}</h4>
                </div>

                <Link
                  onClick={!isLoggedIn && handleShow}
                  className="card-link"
                  to={isLoggedIn && `/read-book/${book.book_id}`}
                >
                  <button className="buy-book-btn buy-book-btn--search">
                    Read
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      });
    return filterByName;
  };

  return (
    <div className="search-container">
      <div className="input-search-container">
        <input
          className="input-search"
          type="text"
          placeholder="Book,author or genre"
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
        />
        <SearchIcon
          className="search-icon-input"
          style={{ fontSize: "3rem" }}
        />
      </div>

      {!searchState ? (
        <div className="popular-searches">
          <header className="category-header">
            <h3 className="popular-searches-heading">Popular searches</h3>
          </header>

          <div className="categories-container">
            {genres.map((genre) => {
              return (
                <Link
                  to={`/${genre.genreName}`}
                  key={genre.id}
                  className="category"
                >
                  <p className="category-title">{genre.genreName}</p>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="search-results">{displaySearchBooks()}</div>
      )}
    </div>
  );
};

export default Search;
