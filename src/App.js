import React, { useState } from 'react';
import Footer from './layouts/Footer';
import MySkills from './pages/MySkills';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Intro from './pages/Intro';
import SocialBar from './components/SocialBar/SocialBar';
import { InView } from 'react-intersection-observer';
import WorkHIstoryTabs from './components/WorkHistoryTabs';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [currentSection, setCurrentSection] = useState('');

  const handleSectionChange = (section, inView) => {
    if (inView) {
      setCurrentSection(section);
    }
  };

  return (
    <div className="app">
      <Intro />
      <ToastContainer />
      <div className="main">
        <SocialBar currentSection={currentSection} />
        <div className="main-container">
          <div className="emptyspace"></div>
          <InView
            as="div"
            onChange={(inView) => handleSectionChange('aboutme', inView)}
          >
            <AboutMe />
          </InView>

          <WorkHIstoryTabs />

          <InView
            as="div"
            onChange={(inView) => handleSectionChange('mySkills', inView)}
          >
            <MySkills />
          </InView>

          <InView
            as="div"
            onChange={(inView) => handleSectionChange('contact', inView)}
          >
            <Contact />
          </InView>
        </div>
      </div>
      {/* <SpinningGlobe /> */}
      <Footer />
    </div>
  );
};

export default App;
