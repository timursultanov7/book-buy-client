import "./App.css";
import { useEffect, useRef, useState } from "react";
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
import { NotFound404 } from "./pages/NotFound404";

function App() {
  const featuredInRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  console.log(isVisible);

  const featureSectionObs = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "-80px",
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(featureSectionObs, options);

    if (featuredInRef.current) observer.observe(featuredInRef.current);

    return () => {
      if (featuredInRef.current) observer.unobserve(featuredInRef.current);
    };
  }, [featuredInRef, options]);

  return (
    <div className="App">
      <div className={isVisible ? "header-wrapper" : "header-wrapper sticky"}>
        <MobileHeader />
      </div>
      <Routes>
        <Route path="*" element={<NotFound404 />} />

        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Home featuredInRef={featuredInRef} />
            </ErrorBoundary>
          }
        />
        <Route
          path="/categories/:genre"
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
