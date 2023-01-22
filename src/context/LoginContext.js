/** @format */

import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(user);

  return (
    <LoginContext.Provider value={{ isLoggedIn, user, setUser, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
