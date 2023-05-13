import React from 'react';
import Footer from './layouts/Footer';
import MySkills from './pages/MySkills';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Intro from './pages/Intro';
import SocialBar from './components/SocialBar/SocialBar';
import WorkHIstoryTabs from './components/WorkHistoryTabs';
import { ToastContainer } from 'react-toastify';
import BackToTop from './components/BackToTop/BackToTop';

const App = () => {
  return (
    <div className="app">
      <Intro />
      <ToastContainer />

      <div className="main">
        <SocialBar />
        <BackToTop />
        <div className="main-container">
          <div className="emptyspace"></div>
          <AboutMe />
          <WorkHIstoryTabs />
          <MySkills />
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
