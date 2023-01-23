import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

import { LoginModalContext } from "../context/LoginModalContext";

import { LoginContext } from "../context/LoginContext";

import { NavContext } from "../context/NavContext";
import LoginModal from "./LoginModal";

const MobileHeader = () => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  const [showDrop, setShowDrop] = useState(false);

  const { show, handleShow, setShow } = useContext(LoginModalContext);

  const { setIsLoggedIn, isLoggedIn, user } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleNavState = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogoNav = (e) => {
    e.preventDefault();
    setIsNavOpen(false);
    navigate("/");
  };

  return (
    <div>
      <header className="mobile-header-container ">
        <div className="header-controls-left">
          <Link to="/">
            <img
              src="https://live.staticflickr.com/65535/52622235762_afc2d4217b_q.jpg"
              alt="logo"
              className="logo"
              onClick={(e) => handleLogoNav(e)}
            />
          </Link>

          {isLoggedIn && (
            <p className="header-heading"> Hi, {user[0].user_firstname}!</p>
          )}
        </div>
        <nav className="header-controls-rigth">
          <ul className="mobile-nav-list">
            <Link className="mobile-nav-link" to="/search">
              <li className="mobile-nav-list-item">
                <SearchIcon style={{ fontSize: "2.6rem" }} />
              </li>
            </Link>
            <li className="mobile-nav-list-item">
              {isLoggedIn ? (
                <div>
                  <LogoutIcon
                    style={{ fontSize: "2.6rem" }}
                    onClick={() => setShowDrop(!showDrop)}
                  />

                  {showDrop && (
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                        position: "absolute",
                      }}
                    >
                      <nav aria-label="main mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton onClick={handleShow}>
                              <ListItemText
                                className="list-item-text"
                                primary="Logout"
                              />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Box>
                  )}
                </div>
              ) : (
                <PersonIcon
                  onClick={handleShow}
                  style={{ fontSize: "2.6rem" }}
                />
              )}
            </li>

            <li
              className="mobile-nav-list-item mobile-nav-list-item--menu "
              onClick={handleNavState}
            >
              {isNavOpen ? (
                <CloseIcon
                  className="nav-menu-icon"
                  style={{ fontSize: "2.6rem" }}
                />
              ) : (
                <MenuIcon
                  className="nav-menu-icon"
                  style={{ fontSize: "2.6rem" }}
                />
              )}
            </li>
          </ul>
        </nav>

        {show && <LoginModal />}
      </header>

      {isNavOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">
              <Link
                className="mobile-menu-link"
                onClick={() => setIsNavOpen(false)}
                to="/search"
              >
                Search
              </Link>
            </li>

            <li className="mobile-menu-item">
              <Link
                className="mobile-menu-link"
                to={"/signup"}
                onClick={() => setIsNavOpen(false)}
              >
                Sign Up
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link
                className="mobile-menu-link"
                to="/"
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link
                onClick={() => setIsNavOpen(false)}
                to="/"
                className="card-link try-for-free-mob-link"
              >
                <button
                  onClick={() => setShow(true)}
                  className="try-for-free-mob-btn"
                >
                  Try for Free
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
