import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { LoginModalContext } from "../context/LoginModalContext";

import { LoginContext } from "../context/LoginContext";
import LoginModal from "./LoginModal";

const MobileHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [showDrop, setShowDrop] = useState(false);

  const { show, handleShow } = useContext(LoginModalContext);

  const { setIsLoggedIn, isLoggedIn, user } = useContext(LoginContext);

  console.log(user);

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
                          <ListItemButton onClick={() => setIsLoggedIn(false)}>
                            {/* <ListItemIcon className="list-item-icon-mui">
                              <FontAwesomeIcon
                                className="icon-mui"
                                icon={faRightFromBracket}
                              />
                            </ListItemIcon> */}
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
              <PersonIcon onClick={handleShow} style={{ fontSize: "2.6rem" }} />
            )}
          </li>

          <li
            className="mobile-nav-list-item mobile-nav-list-item--menu "
            onClick={handleNavState}
          >
            <MenuIcon style={{ fontSize: "2.6rem" }} />
          </li>
        </ul>
      </nav>

      {show && <LoginModal />}
    </header>
  );
};

export default MobileHeader;
