import React, { useState } from 'react';
// import './PasswordInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const PasswordInput = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <div className="password-container" >
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        className="password-input"
        placeholder="Enter your password"
      />
      <FontAwesomeIcon style={{ cursor: 'pointer' , color: 'black'}} className="toggle-icon" icon={isPasswordVisible ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"} onClick={togglePasswordVisibility} />
    </div>
  );
};

export default PasswordInput;
