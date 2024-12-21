import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success or error
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    setMessageType("");

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    setIsLoading(true);

    // Simulate API request (Replace with your API logic)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setMessage("A password reset link has been sent to your email.");
      setMessageType("success");
      setEmail(""); // Reset email field after success
    } catch (error) {
      setMessage("Failed to send reset link. Please try again later.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
    >
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Enter your email to reset password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: isLoading ? "#00a76f" : "#be0d0d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
      {message && (
        <p
          style={{
            marginTop: "20px",
            color: messageType === "success" ? "green" : "red",
          }}
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default ResetPassword;
