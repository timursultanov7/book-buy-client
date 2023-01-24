import React from "react";
import { Link } from "react-router-dom";
import "../styles/not-found-404.css";

export const NotFound404 = () => {
  return (
    <div>
      <h1>Page not found - 404</h1>
      <Link to="/">Return Home</Link>
    </div>
  );
};
