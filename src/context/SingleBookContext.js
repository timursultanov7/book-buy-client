import { createContext, useState } from "react";

export const SingleBookContext = createContext();

export const SingleBookProvider = ({ children }) => {
  const [singleBook, setSingleBook] = useState([]);

  return (
    <SingleBookContext.Provider value={{ singleBook, setSingleBook }}>
      {children}
    </SingleBookContext.Provider>
  );
};
