import './SectionTitle.css';
import { useInView } from 'react-intersection-observer';

const SectionTitle = ({ number, title }) => {
  const [fadeRef, inView] = useInView({
    triggerOnce: true, // Ensures the animation only happens once
  });

  const sectionTitleClasses = `section-title ${inView ? 'fade-in' : ''}`;

  return (
    <div ref={fadeRef} className={sectionTitleClasses}>
      <span className="section-title__line"></span>
      <h2 className="section-title__number">{number}</h2>
      <h2 className="section-title__text">{title}</h2>
      <span className="section-title__line"></span>
    </div>
  );
};

export default SectionTitle;
