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
            GREETINGS, MY NAME IS{' '}
            <span className="about-me__highlight-main">
              {t('aboutMe.name')}
            </span>
          </h1>
          <h2 className="about-me__role">FULL STACK DEVELOPER</h2>
          <h3 className="about-me__section-title">Background</h3>
          <ul className="about-me__background">
            <li>Web developer based in Hanoi, Vietnam</li>
            <li>
              As a Full Stack Developer, I have honed my skills across various
              aspects of web development, from frontend to backend, and have
              mastered the art of creating seamless user experiences.
            </li>
            <li>
              With a strong foundation in HTML, CSS, and JavaScript, I{"'"}ve
              expanded my expertise to include popular frontend frameworks such
              as React and NextJS. My experience in backend development includes
              proficiency in Node.js and Django.
            </li>
            <li>
              {' '}
              My journey as a Full Stack Developer has allowed me to work on
              various projects, ranging from simple landing pages to complex web
              applications, positioning me as a versatile professional in the
              industry.
            </li>
          </ul>
          <Button text="Contact Me" onClick={handleClick} />
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
