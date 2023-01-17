import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import CloseIcon from "@mui/icons-material/Close";

const MobileHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavState = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="mobile-header-container ">
      <div className="header-controls-left">
        <Link to="/">
          <img
            src="https://live.staticflickr.com/65535/52622235762_afc2d4217b_q.jpg"
            alt="logo"
            className="logo"
          />
        </Link>
      </div>
      <nav className="header-controls-rigth">
        <ul className="mobile-nav-list">
          <li className="mobile-nav-list-item">
            <SearchIcon style={{ fontSize: "2.6rem" }} />
          </li>

          <li className="mobile-nav-list-item">
            <LoginIcon style={{ fontSize: "2.6rem" }} />
          </li>
          {/* <li className="mobile-nav-list-item">
            <Link to="/cart" className="mobile-nav-link">
              <ShoppingCartIcon style={{ fontSize: "2.6rem" }} />
            </Link>
          </li> */}
          <li className="mobile-nav-list-item" onClick={handleNavState}>
            <MenuIcon style={{ fontSize: "2.6rem" }} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileHeader;
