import React, { useState } from "react";
import "./signup.css";
import "./login.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
function LogIn() {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Handle form submission
  async function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(""); // Clear previous error messages
    setIsLoading(true); // Start loading state

    try {
      // Replace with your login API endpoint
      const response = await axios.post(
        "/user/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Login failed!",
            })
        );
      }

      const data = await response.json();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("Response Data:", data);

      // Perform further actions, e.g., saving a token or redirecting
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false); // Stop loading state
    }
  }

  return (
    <div className="sign-form signin">
      <h2>Log in to Exclusive</h2>
      <p>Enter your details below</p>
      <div className="Form">
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email or phone number"
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
          <div className="log-forgot">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </button>
            <Link to="/resetpassword" className="forget">
              Forgot Password
            </Link>
          </div>
        </form>
      </div>
      {errorMessage && (
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: { errorMessage },
        //   customClass: {
        //     confirmButton: "error-button", // Add a custom class for the confirm button
        //   },
        // })
        <></>
      )}
      <Link to="/signup" className="forget">
        Don't have an account? <span>Sign Up</span>
      </Link>
    </div>
  );
}

export default LogIn;
