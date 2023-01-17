import { createContext, useState } from "react";

export const GenreContext = createContext();

export const GenreProvider = ({ children }) => {
  const [genre, setGenre] = useState([]);

  return (
    <GenreContext.Provider value={{ genre, setGenre }}>
      {children}
    </GenreContext.Provider>
  );
};
