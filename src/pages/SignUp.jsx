/** @format */

import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { LoginModalContext } from "../context/LoginModalContext";
import LoginModal from "../components/LoginModal";

import "../styles/signup.css";

const SignUp = () => {
  const { show, setShow } = useContext(LoginModalContext);

  const [errorMsg, setErrorMsg] = useState("");
  const [users, setUsers] = useState([]);
  const [user_firstname, setUserFirstName] = useState([]);
  const [user_lastname, setUserLastName] = useState([]);
  const [user_email, setUserEmail] = useState([]);
  const [user_password, setUserPassword] = useState([]);

  const navigate = useNavigate();

  const postUser = (e) => {
    e.preventDefault();

    // fetch("http://localhost:9000/api/auth/signup",
    fetch(
      "https://book-buy-server.onrender.com/api/auth/signup",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_firstname,
          user_lastname,
          user_email,
          user_password,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setUserFirstName(user_firstname);
        setUserLastName(user_lastname);
        setUserEmail(user_email);
        setUserPassword(user_password);
      })
      .catch((err) => {
        setErrorMsg(err);
        console.log(err);
      });

    navigate("/");
    setShow(true); // show modal
  };

  // const handleRegisterModal = () => {
  //   navigate("/");
  //   setShow(true);
  // };

  return (
    <div className="signup-wrapper">
      <div className="signup-title">
        <h1>Welcome to Book Buy</h1>
      </div>
      <div className="signup-container">
        <div className="signup-form-container">
          <form onSubmit={postUser} className="signup-form">
            <div className="input-div">
              <label>First name</label>
              <input
                onChange={(e) => setUserFirstName(e.target.value)}
                type="text"
                placeholder="First name"
                className="input-form"
              />
            </div>
            <div className="input-div">
              <label>Last name</label>
              <input
                onChange={(e) => setUserLastName(e.target.value)}
                type="text"
                placeholder="Last name"
                className="input-form"
              />
            </div>
            <div className="input-div">
              <label>Email address</label>
              <input
                onChange={(e) => setUserEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                className="input-form"
              />
            </div>
            <div className="input-div">
              <label>Password</label>
              <input
                onChange={(e) => setUserPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                className="input-form"
              />
            </div>

            {errorMsg ? <p> Email already being used, please login</p> : ""}

            <button className="custom-btn btn-sign-up" type="submit">
              Sign Up
            </button>
          </form>

          <div className="signup-social-media">
            <div className="signup-buttons">
              <button className="custom-btn btn-sign-up btn-sign-up--google">
                Sign Up with Google
              </button>
              <button className="custom-btn btn-sign-up btn-sign-up--facebook">
                Sign Up with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>

      {show && <LoginModal />}
    </div>
  );
};

export default SignUp;
