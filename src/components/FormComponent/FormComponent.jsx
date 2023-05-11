import './FormComponent.css';
import { BiMessageAlt, BiPhone } from 'react-icons/bi';
import { CgProfile, CgMail } from 'react-icons/cg';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_h312ueh',
        'template_o2uk9qp',
        e.target,
        '1bMmJwaEb5w7I2lM_'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send email. Please try again later.');
        }
      );
  };

  const handleFocus = (e) => {
    const label = e.target.nextElementSibling;
    label.classList.add('form__label--focused');
  };

  const handleBlur = (e) => {
    const label = e.target.nextElementSibling;
    if (!e.target.value) {
      label.classList.remove('form__label--focused');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__title">CONTACT FORM</h2>
      <div className="form__input-container">
        <input
          type="text"
          name="from_name"
          id="name"
          className="form__input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <div className="form__label-input">
          <CgProfile />
          <label htmlFor="name">NAME</label>
        </div>
      </div>
      <div className="form__input-container">
        <input
          type="email"
          name="from_email"
          id="email"
          className="form__input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <div className="form__label-input">
          <CgMail />
          <label htmlFor="email">EMAIL</label>
        </div>
      </div>
      <div className="form__input-container">
        <input
          type="phone"
          name="phone"
          id="phone"
          className="form__input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <div className="form__label-input">
          <BiPhone />
          <label htmlFor="phone">PHONE</label>
        </div>
      </div>
      <div className="form__input-container">
        <textarea
          type="message"
          name="message"
          id="message"
          className="form__message-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <div className="form__label-message">
          <BiMessageAlt />
          <label htmlFor="message">MESSAGE</label>
        </div>
      </div>
      <button type="submit" className="primary-button">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
