import { Link } from "react-router-dom";
import "./signup.css";
import SideImage2 from "../assets/Images/SideImage2.png";
function SignUp() {
  //validate password
  function validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password) && password.length >= 8;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const password = event.target.password.value;
    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
  }
  return (
    <div className="container">
      <div className="side-img">
        <img src={SideImage2} alt="SideImage" />
      </div>
      <div className="sign-form">
        <h2>Create an Account</h2>
        <p className="parag"> Enter your details below</p>
        <div className="Form">
          <form>
            <input
              className="inpt"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className="inpt"
              type="text"
              placeholder="Last Name"
              required
            />
            <input
              className="inpt"
              type="email"
              placeholder="Email or phone number"
              required
            />
            <input
              className="inpt"
              type="password"
              placeholder="Password"
              required
            />
            <input
              className="inpt"
              type="password"
              placeholder="Confirm Password"
              required
            />
            <button className="butt" type="submit">
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
