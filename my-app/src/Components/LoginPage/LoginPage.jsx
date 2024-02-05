import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoginUserName, setLoginPassword } from "../Redux/Slice";
import { useNavigate } from 'react-router-dom';

import "./LoginPage.css";
import { Input } from "antd";

function LoginPage() {

  const page = useNavigate()

  const dispatch = useDispatch();

  const registerUserName = useSelector((i) => i.food.registerUserName);
  const registerPassword = useSelector((i) => i.food.registerPassword);

  const loginUserName = useSelector((i) => i.food.loginUserName);
  const loginPassword = useSelector((i) => i.food.loginPassword);

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const login = (e) => {
    e.preventDefault();

    setUsernameError("");
    setPasswordError("");

    if (registerUserName === loginUserName && registerPassword === loginPassword) {
      page ("/home")
    } else if (registerUserName !== loginUserName) {
      setUsernameError("Incorrect Username");
    } else if (registerPassword !== loginPassword) {
      setPasswordError("Incorrect Password");
    }
  };

  return (
    <>
   

      <div className="login-form-container">
        <form onSubmit={login} className="login-form">
        <h4 style={{textAlign:"center"}}>Login - Page</h4>
        <br/>
          <label>
            Username
            <br /><br />
            <Input
              type="text"
              name="username"
              className="inputDiv"
              onChange={(e) => {
                dispatch(setLoginUserName(e.target.value));
                setUsernameError("");
              }}
              required
            />
            <div style={{ color: "red", textAlign: "center", fontSize: "12px" }}>{usernameError}</div>
          </label>

          <label>
            Password
            <br/><br/>
            <Input.Password
            className="inputDiv"
              onChange={(e) => {
                dispatch(setLoginPassword(e.target.value));
                setPasswordError("");
              }}
              type="password"
              name="password"
              required
            />
            <div style={{ color: "red", textAlign: "center", fontSize: "12px" }}>{passwordError}</div>
          </label>
              <br/>
          <button type="submit" className="login-button">
            Login
          </button>
          <br />
          <div style={{ textAlign: "center" }}>OR</div>
          <br />
          <button type="button" onClick={()=>{page('/register')}} className="register-button">
            Create New Account
          </button>
        </form>
      </div>
     
    </>
  );
}

export default LoginPage;
