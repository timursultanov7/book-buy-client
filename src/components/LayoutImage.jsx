import React from "react";
import "../styles/layout-image.css";
// import '/'

export const LayoutImage = () => {
  return (
    <div className="layout-img-container grid">
      <div className="layout-img">
        <div>
          <h1 className="primary-heading">
            Book Buy is an app for buying your favorite books!
          </h1>
          <a className="try-btn" href="#">
            <span>Try For Free</span>
          </a>
        </div>
      </div>
    </div>
  );
};
