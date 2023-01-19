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

function App() {
  return (
    <div className="App">
      <div className="sticky-header">
        <MobileHeader />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:genre" element={<Genre />} />
        <Route path="/book/:id" element={<Book />} />

        <Route path="/read-book/:id" element={<ReadBook />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <MobileFooter />
    </div>
  );
}

export default App;
