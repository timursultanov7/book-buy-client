import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/not-found-404.css";

export const NotFound404 = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <div>
        <h1 className="heading-not-found">Page not found - 404</h1>

        <Link onClick={goHome} to="/">
          {" "}
          Return Home
        </Link>
      </div>
    </div>
  );
};
