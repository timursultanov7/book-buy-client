import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const MobileFooter = () => {
  return (
    <footer className="footer">
      <div className="logo-col">
        <Link to="/">
          <img
            src="https://live.staticflickr.com/65535/52622235762_afc2d4217b_q.jpg"
            alt="logo"
            className="logo logo-footer"
          />
        </Link>
      </div>
      <div className="site-map-col">
        <ul className="links-list site-map-links">
          <li className="site-map-link">
            <a href="#">About</a>
          </li>
          <li className="site-map-link">
            {" "}
            <a href="#">Contacts</a>
          </li>
          <li className="site-map-link">
            <a href="#">Account</a>
          </li>
          <li className="site-map-link">
            <a href="#">Resourses</a>
          </li>
        </ul>
      </div>
      <div className="socials">
        <ul className="links-list social-links">
          <li className="social-link">
            {" "}
            <a href="#">
              <FacebookIcon
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  color: "#777",
                }}
              />
            </a>
          </li>
          <li className="social-link">
            {" "}
            <a href="#">
              <TwitterIcon
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  color: "#777",
                }}
              />
            </a>
          </li>
          <li className="social-link">
            {" "}
            <a href="#">
              <InstagramIcon
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  color: "#777",
                }}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default MobileFooter;
