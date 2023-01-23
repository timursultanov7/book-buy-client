import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Genre } from "./pages/Genre";
import { Home } from "./pages/Home";
import MobileHeader from "./components/MobileHeader";
import MobileFooter from "./components/MobileFooter";

import ReadBook from "./pages/ReadBook";

import { Book } from "./pages/Book";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <div className="sticky-header">
        <MobileHeader />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />
        <Route
          path="/:genre"
          element={
            <ErrorBoundary>
              <Genre />
            </ErrorBoundary>
          }
        />
        <Route
          path="/book/:id"
          element={
            <ErrorBoundary>
              <Book />
            </ErrorBoundary>
          }
        />

        <Route
          path="/read-book/:id"
          element={
            <ErrorBoundary>
              <ReadBook />
            </ErrorBoundary>
          }
        />
        <Route
          path="/search"
          element={
            <ErrorBoundary>
              <Search />
            </ErrorBoundary>
          }
        />
        <Route
          path="/signup"
          element={
            <ErrorBoundary>
              <SignUp />
            </ErrorBoundary>
          }
        />
      </Routes>
      <MobileFooter />
    </div>
  );
}

export default App;
