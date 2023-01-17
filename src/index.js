import React from "react";

import { BooksProvider } from "./context/BooksContext";
import { GenreProvider } from "./context/GenreContext";
import { SingleBookProvider } from "./context/SingleBookContext";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <BooksProvider>
        <GenreProvider>
          <SingleBookProvider>
            <App />
          </SingleBookProvider>
        </GenreProvider>
      </BooksProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();