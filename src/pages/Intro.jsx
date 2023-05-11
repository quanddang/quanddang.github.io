import React, { useEffect } from 'react';
import Scroll from '../components/Scroll';
import NavBar from '../layouts/NavBar';

const Intro = () => {
  const handleMouseMove = (e) => {
    const left = document.getElementById('left-side');
    const p = (e.clientX / window.innerWidth) * 100;
    left.style.width = p.toString() + '%';
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  };

  return (
    <header>
      <div className="banner" onMouseMove={handleMouseMove}>
        <Scroll />
        <div className="side" id="left-side">
          <h2 className="title">
            I{"'"}m a <span className="fancy">Frontend</span> developer
          </h2>
        </div>

        <div className="side" id="right-side">
          <h2 className="title">
            I{"'"}m a <span className="fancy">Backend</span> developer
          </h2>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Intro;
