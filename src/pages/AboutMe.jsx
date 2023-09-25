import profilePic from '../assets/profilePic.jpg';
import Button from '../components/Button/Button';
import Highlights from '../components/Highlights';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import './AboutMe.css';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    document.getElementById('contact').scrollIntoView();
  };

  return (
    <section className="about-me" id="about-me">
      <SectionTitle number="01" title="About Me" />
      <div className="about-me__container">
        <div className="about-me__info">
          <h1 className="about-me__name">
            {t('aboutMe.intro')}{' '}
            <span className="about-me__highlight-main">
              {t('aboutMe.name')}
            </span>
          </h1>
          <h2 className="about-me__role">FULL STACK DEVELOPER</h2>
          <h3 className="about-me__section-title">
            {t('aboutMe.backgroundTitle')}
          </h3>
          <ul className="about-me__background">
            <li>{t('aboutMe.background1')}</li>
            <li>{t('aboutMe.background2')}</li>
            <li>{t('aboutMe.background3')}</li>
            <li>{t('aboutMe.background4')}</li>
          </ul>
          <Button text={t('aboutMe.contact')} onClick={handleClick} />
        </div>
        <div className="about-me__photo">
          <img src={profilePic} alt="profile" />
        </div>
      </div>
      <div className="about-me__highlights">
        <Highlights />
      </div>
    </section>
  );
};

export default AboutMe;
