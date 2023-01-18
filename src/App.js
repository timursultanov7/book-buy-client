import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Genre } from "./pages/Genre";
import { Home } from "./pages/Home";
import MobileHeader from "./components/MobileHeader";
import MobileFooter from "./components/MobileFooter";
import LoginPage from "./pages/LoginPage";
import ReadBook from "./pages/ReadBook";

import { Book } from "./pages/Book";
import Search from "./pages/Search";

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
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/read-book/:id" element={<ReadBook />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <MobileFooter />
    </div>
  );
}

export default App;
