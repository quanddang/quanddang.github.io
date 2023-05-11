import NetworkNodesBackground from '../components/NetworkNodeBackground/NetworkNodeBackground';
import './Contact.css';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import FormComponent from '../components/FormComponent/FormComponent';

import { HiOutlinePhone as Phone } from 'react-icons/hi';
import { RiMessengerLine as Messenger } from 'react-icons/ri';
import { AiOutlineLinkedin as Linkedin } from 'react-icons/ai';
import { SiZalo as Zalo } from 'react-icons/si';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <SectionTitle number="04" title="Contact Me" />

      <div className="contact__description">
        <h1>Let{"'"}s Get in Touch</h1>
        <p>
          If you have any questions, suggestions, or collaboration
          opportunities, please dont hesitate to reach out. I{"'"}m always open
          to discussing new projects, creative ideas, or opportunities to be a
          part of your vision. Fill out the form below, or contact me on social
          media, and I{"'"}ll get back to you as soon as possible.
        </p>
        <div className="contact__icons-container">
          <a href="tel:+84836286069">
            <Phone className="contact__icons" />
          </a>
          <a href="https://www.messenger.com/t/100000690503898">
            <Messenger className="contact__icons" />
          </a>
          <a href="https://www.linkedin.com/in/quanddang/">
            <Linkedin className="contact__icons" />
          </a>
          <a href="https://www.zalo.me/0836286069">
            <Zalo className="contact__icons" />
          </a>
        </div>
      </div>

      <div
        style={{ margin: '50px 0 0 0', position: 'relative', width: '100%' }}
      >
        <NetworkNodesBackground />
        {/* <ContactForm /> */}
        <FormComponent />
      </div>
    </section>
  );
};

export default Contact;
