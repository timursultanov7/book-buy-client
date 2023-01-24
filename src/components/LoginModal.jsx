import React, { useState, useContext } from "react";
import "../styles/login-modal.css";
import { Link, useNavigate } from "react-router-dom";
import { LoginModalContext } from "../context/LoginModalContext";
import { LoginContext } from "../context/LoginContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const LoginModal = () => {
  const [user_email, setUserEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [user_password, setUserPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const { show, setShow, handleClose, handleShow } =
    useContext(LoginModalContext);
  const { user, setUser, setIsLoggedIn, isLoggedIn } = useContext(LoginContext);

  const handleLogin = async () => {
    try {
      // const res = await fetch("http://localhost:9000/api/auth/",
      const res = await fetch(
        "https://book-buy-server.onrender.com/api/auth/",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_email: user_email,
            user_password: user_password,
          }),
        }
      );

      const data = await res.json();
      // console.log(data);
      // Having the data, we show stored user and close the modal and set the status to logged in and change the navbar

      setUser(data);

      if (data.errMsg) {
        setErrMsg(data.errMsg);
        setShow(true);
        setIsLoggedIn(false);
      } else if (data.msgPass) {
        setErrMsg(data.errMsg);
        setShow(true);
        setIsLoggedIn(false);
      } else {
        setShow(false);
        setIsLoggedIn(true);
        setErrMsg("");
        setUserEmail("");
        setUserPassword("");
      }

      navigate("/");

      // Setting user as logged in
    } catch (err) {
      // If the password or email are wrong, we will show an error message and the modal should not close nor set the islogged in to true.
      console.log(err);
      // setErrMsg(err);
    }
  };

  return (
    <div className="modal-wrapper">
      <Modal
        onSubmit={(e) => {
          handleLogin();
          e.preventDefault();
        }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="modal-form-container">
            {/* Error message */}
            <p className="err-msg">{errMsg}</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={user_email}
                onChange={(e) => setUserEmail(e.target.value)}
                className="form-control"
              />
              {/* {errEmail} <br /> */}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={user_password}
                onChange={(e) => setUserPassword(e.target.value)}
                className="form-control"
              />
            </Form.Group>
            {/* {errPass} */}

            <p className="sign-up-p">
              Don't have an account?
              <Link className="sign-up-link" to="/Signup" onClick={handleClose}>
                Sign up
              </Link>
            </p>

            <Button
              className="submit-btn"
              variant="primary"
              type="submit"
              disabled={!user_email || !user_password ? true : false}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginModal;
