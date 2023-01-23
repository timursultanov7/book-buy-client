import { createContext, useState } from "react";

export const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavContext.Provider>
  );
};
