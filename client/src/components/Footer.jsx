import { Link } from "react-router-dom";
import QrCode from "../assets/Images/QrCode.png";
import AppStore from "../assets/Images/app-store.png";
import PlayStore from "../assets/Images/play-store.png";
import Send from "../assets/Images/send.png";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div>
        <h3>Exclusive</h3>
        <h4>Subscripe</h4>
        <p>Get 10% of your first order</p>
        <div className="subscribe">
        <input type="email" placeholder="Enter your email" />
        <img src={Send} alt="send" />
        </div>

      </div>
      <div>
        <h3>Support</h3>
        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh. exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
        
      </div>
      <div>
      <h3>Account</h3>
      <Link to="/profile" className="link">my account</Link>
      <Link to="/signup" className="link">Login / Register</Link>
      <Link to="/cart" className="link">Cart</Link>
      <Link to="/wishlist" className="link">Wishlist</Link>
      <Link to="/" className="link">Shop</Link>
      </div>
      <div>
      <h3>Quick Links</h3>
      <Link className="link">Privacy Policy</Link>
      <Link className="link">Terms & Conditions</Link>
      <Link className="link">FAQs</Link>
      <Link to="/contact" className="link">Contact</Link>
      </div>
      <div className="download-app">
      <h3>Download App</h3>
      <p>Download App for Android and ios mobile phone</p>
      <div className="imgs">
        <div className="left-column">
        <img src={QrCode} alt="playstore" />
        </div>
        <div className="right-column">
          <img src={PlayStore} alt="playstore" />
          <img src={AppStore} alt="appstore" />
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
