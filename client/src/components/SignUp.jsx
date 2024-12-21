import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import SideImage2 from "../assets/Images/SideImage2.png";
import { Alert } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import Cookie from "js-cookie";
import Cookies from "js-cookie";

// import PasswordInput from "./PasswordInput";
function SignUp({ setToken }) {
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

  // Validate password
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };
  const validatePasswordLevel = (password) => {
    // Define criteria
    const lengthCriteria = password.length >= 8;
    const lowercaseCriteria = /[a-z]/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharacterCriteria = /[!@#$%^&*]/.test(password);

    // Calculate strength
    let strength = 0;

    if (lengthCriteria) strength++;
    if (lowercaseCriteria) strength++;
    if (uppercaseCriteria) strength++;
    if (numberCriteria) strength++;
    if (specialCharacterCriteria) strength++;

    // Return level based on strength
    if (strength <= 2) {
      return "Weak"; // Fails basic security
    } else if (strength === 3 || strength === 4) {
      return "Medium"; // Acceptable, but could improve
    } else if (strength === 5) {
      return "Strong"; // Best practice
    }
  };
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
      const response = await axios
        .post(
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
        )
        .then((response) => {
          const t = response.data.token;
          // const t = Cookie.get("jwt");
          Cookie.set("jwt", t);
          setToken(t);
        });

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
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              required
            />
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              placeholder="User Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
            {errorMessage.password && (
              <Alert className="alert" severity="error" color="error">
                {errorMessage.password}
              </Alert>
            )}
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              required
            />
            {/* <PasswordInput/> */}
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
