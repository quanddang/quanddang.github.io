import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          aboutMe: {
            intro: 'Greetings, my name is',
            name: 'Quan Dang',
            backgroundTitle: 'Background',
            background1: 'Web developer based in Ho Chi Minh City, Vietnam',
            background2:
              'As a Full Stack Developer, I have honed my skills across various aspects of web development, from frontend to backend, and have mastered the art of creating seamless user experiences.',
            background3: `With a strong foundation in HTML, CSS, and JavaScript, I've expanded my expertise to include popular frontend frameworks such as React and NextJS. My experience in backend development includes proficiency in Node.js and Django.`,
            background4:
              'My journey as a Full Stack Developer has allowed me to work on various projects, ranging from simple landing pages to complex web applications, positioning me as a versatile professional in the industry.',
            contact: 'Contact Me',
          },
          card: {
            title1: '',
            quality1: '',
            title2: '',
            quality2: '',
            title3: '',
            quality3: '',
            title4: '',
            quality4: '',
            titl5: '',
            quality5: '',
            title6: '',
            quality6: '',
          },
        },
      },
      vi: {
        translation: {
          aboutMe: {},
          card: {},
        },
      },
    },
  });

export default i18n;
