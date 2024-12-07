import { Link } from "react-router-dom";
import "./Navbar.css";
import WishListIcon from "../assets/Images/Wishlist.png";
import CartIcon from "../assets/Images/Cart1.png";
import SearchIcon from "../assets/Images/search.png";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Exclusive</h1>
      <div className="links-desktop">
      <ul className="links-desktop">
        <li><Link to="/">Home</Link></li>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="signup">Sign Up</Link></li>
      </ul>
      </div>
      <div className="search">
        <input type="search" placeholder="Search"/>
        <img src={SearchIcon} alt="search" />
      </div>
      <div className="icons">
        <div><img src={WishListIcon} alt="Wishlist" /></div>
        <div><img src={CartIcon} alt="Cart" /></div>
      </div>
      <div className="links">
        <span className="icon">
            <span></span>
            <span></span>
            <span></span>
        </span>
        <ul>
            <li><a href="#services">services</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#aAbout">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    </div>
  );
}

export default Navbar;
