
import React, { useState } from "react";
import "./SignInPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setRegisterUserName,
  setRegisterEmail,
  setRegisterPhoneNumber,
  setRegisterPassword,
  setRegisterConfirmPassword,
} from "../Redux/Slice";
import LoginPage from "../LoginPage/LoginPage";
import { Input,notification, Space } from "antd";



function SignInPage() {

  
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Congratulations',
      description: 'Your Account is Created Successfully',
    });
  };
  
  const page = useNavigate()

  const [displayErrors, setDisplayErrors] = useState(false);

  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const registerUserName = useSelector((i) => i.food.registerUserName);
  const registerEmail = useSelector((i) => i.food.registerEmail);
  const registerPhoneNumber = useSelector((i) => i.food.registerPhoneNumber);
  const registerPassword = useSelector((i) => i.food.registerPassword);
  const registerConfirmPassword = useSelector(
    (i) => i.food.registerConfirmPassword
  );

  const validateUserName = () => {
    if (registerUserName.length < 4) {
      setUserNameError("Username must contain at least 4 characters");
    } else {
      setUserNameError("");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registerEmail)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePhoneNumber = () => {
    if (registerPhoneNumber.length !== 10) {
      setPhoneNumberError("Phone number must contain 10 digits");
    } else {
      setPhoneNumberError("");
    }
  };

  const validatePassword = () => {
    if (registerPassword.length < 4) {
      setPasswordError("Password must contain at least 4 characters");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (registerConfirmPassword !== registerPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const dispatch = useDispatch();

  const handleChange = (e, validator) => {
     switch (e.target.name) {
      case "username":
        dispatch(setRegisterUserName(e.target.value));
        break;
      case "email":
        dispatch(setRegisterEmail(e.target.value));
        break;
      case "phoneNumber":
        dispatch(setRegisterPhoneNumber(e.target.value));
        break;
      case "password":
        dispatch(setRegisterPassword(e.target.value));
        break;
      case "confirmPassword":
        dispatch(setRegisterConfirmPassword(e.target.value));
        break;
      default:
        break;
    }

  
    validator();
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    validateUserName();
    validateEmail();
    validatePhoneNumber();
    validatePassword();
    validateConfirmPassword();

      if (
      userNameError ||
      emailError ||
      phoneNumberError ||
      passwordError ||
      confirmPasswordError
    ) {
      setDisplayErrors(true);
    } else {
      page('/')
      setDisplayErrors(false);
      openNotificationWithIcon("success")
      
    }


  };


  return (
    <>
      {/* {contextHolder} */}

      <div className="registration-form-container">
        <form onSubmit={handleSubmit} className="registration-form">
         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <h3>Sign Up</h3>
            or <span className="loginSpan" onClick={()=>{page("/")}}><b>Login to your Account</b> </span>
          </div>
          <div>
            <img src="https://cdn.vectorstock.com/i/preview-1x/84/17/food-shawarma-with-vegetables-concept-vector-47448417.jpg" height={100} width={100} alt="" />
          </div>
         </div>
            <label>
              <Input className="inputName"
                onChange={(e) => handleChange(e, validateUserName)}
                type="text"
                placeholder=" Name"
                name="username"
                required
              />
              {displayErrors && (
                <div style={{ textAlign: "center", color: "red", fontSize: "12px" }}>
                  {userNameError}
                </div>
              )}
            </label>
            <label>
              <Input
                className="inputName"
                onChange={(e) => handleChange(e, validateEmail)}
                placeholder=" Email"
                type="email"
                name="email"
                
              />
              {displayErrors && (
                <div style={{ textAlign: "center", color: "red", fontSize: "12px" }}>
                  {emailError}
                </div>
              )}
            </label>
            <label>
            
              <Input
                className="inputName"
                onChange={(e) => handleChange(e, validatePhoneNumber)}
                type="number"
                placeholder=" Phone Number"
                name="phoneNumber"
                required
              />
              {displayErrors && (
                <div style={{ textAlign: "center", color: "red", fontSize: "12px" }}>
                  {phoneNumberError}
                </div>
              )}
            </label>
            <label>
              <Input.Password
                className="inputName"
                placeholder="Password"
                onChange={(e) => handleChange(e, validatePassword)}
                type="password"
                name="password"
                required
              />
              {displayErrors && (
                <div style={{ textAlign: "center", color: "red", fontSize: "12px" }}>
                  {passwordError}
                </div>
              )}
            </label>
            <label>
              <Input.Password
                className="inputName"
                placeholder=" Confirm Password"
                onChange={(e) => handleChange(e, validateConfirmPassword)}
                type="password"
                name="confirmPassword"
                required
              />
              {displayErrors && (
                <div style={{ textAlign: "center", color: "red", fontSize: "12px" }}>
                  {confirmPasswordError}
                </div>
              )}
            </label>
            <button type="submit" className="register-button">
              Register
            </button>
          </form>
      </div>
    </>
  );
}

export default SignInPage;
