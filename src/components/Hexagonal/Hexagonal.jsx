import './Hexagonal.css';
import { useInView } from 'react-intersection-observer';

const HexagonalArticle = ({ icon, isEven }) => {
  const [fadeRef, inView] = useInView({
    triggerOnce: true, // Ensures the animation only happens once
  });

  const IconComponent = icon.IconComponent;
  const articleClasses = `hexagonal__article ${
    isEven ? 'hexagonal__article--even' : ''
  } ${inView ? 'fade-in' : ''}`;

  return (
    <article ref={fadeRef} className={articleClasses}>
      <IconComponent className="hexagonal__icon" />
      <p className="hexagonal__text">{icon.label}</p>
    </article>
  );
};

const Hexagonal = ({ title, icons }) => (
  <div className="hexagonal">
    <h1 className="hexagonal__title">{title}</h1>
    <div className="hexagonal__section">
      {icons.map((icon, index) => (
        <HexagonalArticle key={index} icon={icon} isEven={index % 2 === 1} />
      ))}
    </div>
  </div>
);

export default Hexagonal;
