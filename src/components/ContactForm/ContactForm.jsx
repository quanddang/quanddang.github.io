import { FiPhone, FiMail, FiMapPin, FiUser } from 'react-icons/fi';
import {
  AiOutlineFacebook as Facebook,
  AiOutlineLinkedin as Linkedin,
} from 'react-icons/ai';
import { SiZalo as Zalo } from 'react-icons/si';
import './ContactForm.css';
import Button from '../Button/Button';

function ContactFormB() {
  return (
    <div className="contact-form">
      <div className="contact-form__top-section">
        <div className="contact-form__info-item">
          <FiMapPin className="contact-form__info-item--icon" />
          <span>Hanoi, Vietnam</span>
        </div>
        <div className="contact-form__info-item contact-form__info-item--phone">
          <FiPhone className="contact-form__info-item--icon" />
          <span>+84-836-286-069</span>
        </div>
        <div className="contact-form__info-item contact-form__info-item--email">
          <FiMail className="contact-form__info-item--icon" />
          <span>quanddang@gmail.com</span>
        </div>
      </div>

      <div className="contact-form__bottom-section">
        <div className="contact-form__title">Contact Form</div>
        <div className="contact-form__middle">
          <div className="contact-form__middle-left">
            <label htmlFor="name">Your Name</label>
            <div className="contact-form__input-icon-wrapper">
              <input type="text" id="name" />
              <FiUser className="contact-form__input-icon" />
            </div>

            <label htmlFor="email">Mail</label>
            <div className="contact-form__input-icon-wrapper">
              <input type="text" id="name" />
              <FiMail className="contact-form__input-icon" />
            </div>

            <label htmlFor="phone">Phone</label>
            <div className="contact-form__input-icon-wrapper">
              <input type="text" id="name" />
              <FiPhone className="contact-form__input-icon" />
            </div>
          </div>

          <div className="contact-form__middle-right">
            <label htmlFor="message">Message</label>
            <textarea placeholder="Your Message" id="message" />
          </div>
        </div>
        <div className="contact-form__social">
          <div className="contact-form__social--title">Social Media</div>
          <div className="contact-form__social--listicons">
            <Facebook className="contact-form__social--icon" />
            <Linkedin className="contact-form__social--icon" />
            <Zalo className="contact-form__social--icon" />
          </div>
        </div>
        <div className="contact-form__bottom">
          <Button text="Send Message" />
        </div>
      </div>
    </div>
  );
}

export default ContactFormB;
