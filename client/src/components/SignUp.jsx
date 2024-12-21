import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import SideImage2 from "../assets/Images/SideImage2.png";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Alert } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
// import PasswordInput from "./PasswordInput";
function SignUp() {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    password: "",
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    phoneNumber: "",
    success: false,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  // Validate password
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };
  useEffect(() => {
    validatePassword(formData.password);
  }, [formData.password]);
  // Handle form input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      userName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    } = formData;
    console.log(
      firstName,
      lastName,
      userName,
      phoneNumber,
      email,
      password,
      confirmPassword
    );
    if (!validatePassword(password)) {
      setErrorMessage((errorMessage1) => ({
        ...errorMessage1,
        password: "Password must be like Pa$$w0rd123!",
      }));
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage((errorMessage1) => ({
        ...errorMessage1,
        confirmPassword: "Passwords do not match.",
      }));
      return;
    }
    setErrorMessage((errorMessage1) => ({
      ...errorMessage1,
      success: true,
    }));
    // Submit data to the server
    try {
      const response = await axios.post(
        "/user/register",
        {
          firstName: firstName,
          lastName: lastName,
          username: userName,
          phoneNumber: phoneNumber,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to sign up.");
      }

      const data = await response.data;
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Account created successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("API Response:", data);
    } catch (error) {
      console.error("SignUp Error:", error.message);
      setErrorMessage((errorMessage1) => ({
        ...errorMessage1,
        success: "Failed to create account. Please try again later.",
      }));
    }
  };

  return (
    <div className="container">
      <div className="side-img">
        <img src={SideImage2} alt="SideImage" />
      </div>
      <div className="sign-form">
        <h2>Create an Account</h2>
        <p>Enter your details below</p>
        <div className="form">
          <form onSubmit={handleFormSubmit}>
            <div className="inputfield">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="inputfield">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="inputfield">
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                placeholder="User Name"
                required
              />
            </div>
            <div className="inputfield">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="inputfield">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="inputfield">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
              <span onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </span>
            </div>
            <div className="inputfield">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                required
              />
              <span onClick={toggleConfirmPasswordVisibility}>
                {confirmPasswordVisible ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </span>
            </div>
            
            {errorMessage.password && (
              <Alert className="alert" severity="error" color="error">
                {errorMessage.password}
              </Alert>
            )}
            {errorMessage.confirmPassword && (
              <Alert className="alert" severity="error" color="error">
                {errorMessage.confirmPassword}
              </Alert>
            )}
            <button className="submit" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <Link to="/login" className="forget">
          Already have an account? <span>Log In</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
