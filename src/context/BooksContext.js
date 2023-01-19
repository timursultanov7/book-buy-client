import { createContext, useEffect, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        // const res = await fetch("http://localhost:9000/api/books/all");
        const res = await fetch(
          "https://book-buy-server.onrender.com/api/books/all"
        );

        const data = await res.json();

        setBooks(data);
      } catch (err) {
        console.log(err);
      }
    };

    getBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
