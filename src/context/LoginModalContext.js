import { createContext, useState } from "react";

export const LoginModalContext = createContext();

export const LoginModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <LoginModalContext.Provider
      value={{ show, setShow, handleClose, handleShow }}
    >
      {children}
    </LoginModalContext.Provider>
  );
};
