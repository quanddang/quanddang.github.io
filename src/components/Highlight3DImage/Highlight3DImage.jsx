import React from 'react';
import './Highlight3DImage.css';
import SpinningGlobe from '../SpinningGlobe/SpinningGlobe';

// Dummy Three.js Canvas Component

const Highlight3DImage = () => {
  const data = [
    {
      title: 'Diverse Professional Experiences',
      description:
        'My professional journey has taken me through various industries, each offering unique challenges and rewards, allowing me to broaden my horizons.',
    },
    {
      title: 'Developing a Versatile Skill Set',
      description:
        "Driven by curiosity and a passion for learning, I've switched between fields, gaining a range of skills and perspectives that have enriched my experiences.",
    },
    {
      title: 'Discovering a Passion for Development',
      description:
        'It was when I entered the realm of software development that I discovered my true calling. I became captivated by the process of crafting functional and visually appealing applications, as well as solving intricate problems through code.',
    },
    {
      title: 'Embracing the Future as a Developer',
      description:
        'Now, I take pride in identifying as a developer and am enthusiastic about furthering my growth in this dynamic and ever-changing field.',
    },
  ];

  return (
    <div className="highlight-3d-image">
      <SpinningGlobe />
      <div className="highlight-3d-image__bottom">
        {data.map((item, index) => (
          <div key={index} className="highlight-3d-image__grid">
            <p className="highlight-3d-image__grid-title">{item.title}</p>
            <p className="highlight-3d-image__grid-description">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlight3DImage;
