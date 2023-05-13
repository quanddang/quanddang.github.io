import './HighlightTextImage.css';

import { useInView } from 'react-intersection-observer';

const TextImageSection = ({ title, body }) => {
  const [fadeRef, inView] = useInView({
    triggerOnce: true, // Ensures the animation only happens once
  });

  // Apply the 'fade-in' class only once when the component comes into the viewport
  const sectionClasses = `highlight-text-image__section ${
    inView ? 'fade-in' : ''
  }`;

  return (
    <div ref={fadeRef} className={sectionClasses}>
      <h3 className="highlight-text-image__title">{title}</h3>
      <p className="highlight-text-image__body">{body}</p>
    </div>
  );
};

const HighlightTextImage = ({ imageUrl, altText, highlights }) => {
  return (
    <div className="highlight-text-image">
      <img
        src={imageUrl}
        alt={altText}
        className="highlight-text-image__image"
      />
      <div className="highlight-text-image__content">
        {highlights.map(({ title, body }, index) => (
          <TextImageSection key={index} title={title} body={body} />
        ))}
      </div>
    </div>
  );
};

export default HighlightTextImage;
