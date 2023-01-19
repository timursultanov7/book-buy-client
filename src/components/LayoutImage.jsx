import React, { useContext } from "react";
import { LoginModalContext } from "../context/LoginModalContext";
import { LoginContext } from "../context/LoginContext";
import "../styles/layout-image.css";

export const LayoutImage = () => {
  const { handleShow } = useContext(LoginModalContext);

  const { isLoggedIn } = useContext(LoginContext);
  return (
    <div className="layout-img-container grid">
      <div className="layout-img">
        <div>
          <h1 className="primary-heading">
            Book Buy is an app for reading your favorite books online!
          </h1>
          {!isLoggedIn && (
            <button onClick={handleShow} className="try-btn">
              <span>Try For Free</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
