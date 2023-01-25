import React, { useContext } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { BooksContext } from "../context/BooksContext";
import { BookCard } from "./BookCard";
import "../styles/bestsellers.css";

export const BestSellers = () => {
  const { books, loading } = useContext(BooksContext);
  const limitDisplay = 4;
  const skeletonQuantity = [1, 2, 3, 4];

  return (
    <div className="bestsellers-wrapper">
      <h2 className="bestsellers-heading">Best Sellers</h2>
      <section
        className={
          loading ? "grid-sceleton grid" : "bestsellers-container grid"
        }
      >
        {loading ? (
          skeletonQuantity.map((skeleton) => {
            return (
              <Stack key={skeleton} spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
              </Stack>
            );
          })
        ) : (
          <div className="book-grid">
            {books.slice(0, limitDisplay).map((book) => {
              return <BookCard key={book.book_id} book={book} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
};
