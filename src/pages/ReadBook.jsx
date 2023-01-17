import React from "react";
import { useParams } from "react-router-dom";
import "../styles/read-book.css";

const ReadBook = () => {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <h1>{params.id}</h1>
      PAGE FOR READING BOOK
    </div>
  );
};

export default ReadBook;
