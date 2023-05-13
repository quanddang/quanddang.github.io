import { HiOutlinePhone as Phone } from 'react-icons/hi';
import { RiMessengerLine as Messenger } from 'react-icons/ri';
import { AiOutlineLinkedin as Linkedin } from 'react-icons/ai';
import { SiZalo as Zalo } from 'react-icons/si';
import './SocialBar.css';

const SocialBar = () => {
  return (
    <>
      <div className="social-bar">
        <div className="social-bar__icons">
          <a href="tel:+84836286069">
            <Phone />
          </a>
          <a href="https://www.messenger.com/t/100000690503898">
            <Messenger />
          </a>
          <a href="https://www.linkedin.com/in/quanddang/">
            <Linkedin />
          </a>
          <a href="https://www.zalo.me/0836286069">
            <Zalo />
          </a>
        </div>
        <div className="social-bar__line"></div>
      </div>
    </>
  );
};

export default SocialBar;
