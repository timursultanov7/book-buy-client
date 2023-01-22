/** @format */

import React, { useState, createContext, useEffect } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const isLogedInFromLocal = JSON.parse(
    localStorage.getItem("isLogedIn") || false
  );
  const userFromLocal = JSON.parse(localStorage.getItem("user") || "[]");

  const [user, setUser] = useState(userFromLocal);

  console.log(user);

  const [isLoggedIn, setIsLoggedIn] = useState(isLogedInFromLocal);
  // setIsLoggedIn(isLogedInFromLocal);

  useEffect(() => {
    localStorage.setItem("isLogedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("user", JSON.stringify(user));
  }, [isLoggedIn, user]);

  // useEffect(() => {}, [user]);

  return (
    <LoginContext.Provider value={{ isLoggedIn, user, setUser, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
