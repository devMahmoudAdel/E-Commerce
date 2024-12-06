import {Link} from 'react-router-dom';
import "./signup.css";
function SignUp() {
//validate password
function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return regex.test(password)&& password.length >= 8;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const password = event.target.password.value;
  if (!validatePassword(password)) {
    alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    return;
  }
}
  return (
    <div className="container">
      <div className="side-img"><img src="../assets/Images/SideImage.png" alt="SideImage" /></div>
      <div className="sign-form">
        <h2>Create an Account</h2>
        <p>Enter your details below</p>
        <div className="Form">
        <form>
        <input type="text" placeholder="First Name" required/>
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email or phone number" required/>
        <input type="password" placeholder="Password" required/>
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
        </form>
        </div>
        <Link to="/login" className='forget'>Already have an account? <span>Log In</span></Link>
      </div>
    </div>
  );
}

export default SignUp;
