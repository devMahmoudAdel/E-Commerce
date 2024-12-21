import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";

function EditProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("/getMe");
        setFormData((prevData) => ({
          ...prevData,
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
        }));
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to load profile data.");
      }
    }
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfileUpdate = async () => {
    try {
      await axios.patch("/User/edit", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });
      setSuccess("Profile updated successfully!");
      setError("");
    } catch (err) {
      console.error("Error updating profile:", err);
      setError(
        err.response?.data?.message || "Failed to update profile. Please try again."
      );
      setSuccess("");
    }
  };

  const handlePasswordChange = async () => {
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    try {
      await axios.patch("/User/changePassword", {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });
      setSuccess("Password changed successfully!");
      setError("");
    } catch (err) {
      console.error("Error changing password:", err);
      setError(
        err.response?.data?.message || "Failed to change password. Please try again."
      );
      setSuccess("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword || formData.currentPassword) {
      await handlePasswordChange();
    }
    await handleProfileUpdate();
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <h2 className="title-name">Edit Your Profile</h2>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <div className="form-edit-profile-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-edit-profile-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-edit-profile-input">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <label className="password-label" htmlFor="current-password">
            Password Changes
          </label>
          <div className="form-edit-profile-input">
            <input
              type="password"
              id="current-password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              placeholder="Current password"
            />
          </div>

          <div className="form-edit-profile-input">
            <input
              type="password"
              id="new-password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="Enter a new password"
            />
          </div>

          <div className="form-edit-profile-input">
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="save-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
