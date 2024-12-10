import "./signup.css";
import { Link } from "react-router-dom";
function LogIn() {
  return (
    <div className="sign-form">
      <h2>Log in to Exclusive</h2>
      <p>Enter your details below</p>
      <div className="Form">
        <form>
          <input type="email" placeholder="Email or phone number" required/>
          <input type="password" placeholder="Password" required/>
          <div className="log-forgot">
            <button type="submit">Log In</button>
            <Link to="/resetpassword" className="forget">Forgot Password</Link></div>
        </form>
      </div>
      <Link to="/signup" className='forget'>Don't have an account? <span>Sign Up</span></Link>
    </div>
  );
}

export default LogIn;
