import MailIcon from "../assets/Images/icons-mail.png"
import PhoneIcon from "../assets/Images/icons-phone.png"
import "./contact.css";
function Contact() {
  return (
    <div className="contact">
      <p className="link-url">Home / <span>Contact</span></p>
      <div className="contact-container">
        <div className="info">
          <div>
            <div className="title">
            <img src={PhoneIcon} alt="phone" />
            <h3>Call To Us</h3>
            </div>
            <p className="dec">We are avilable 24/7,7 days a week</p>
            <p className="dec">Phone +20100000015</p>
            <hr />
            <div className="title">
            <img src={MailIcon} alt="phone" />
            <h3>Write To Us</h3>
            </div>
            <p className="dec">fill out our form and we will contact you within 24 hours</p>
            <p className="dec">Email: customer@exclusive.com</p>
            <p className="dec">Email: customer@exclusive.com</p>
            <p className="dec">Email: support@exclusive.com</p>
          </div>
        </div>
        <div className="contact-form">
          <form >
            <div className="inputs">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="email" placeholder="Your Phone" />
            </div>
            <input type="text" placeholder="Your Message" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
