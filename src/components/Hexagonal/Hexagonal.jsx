import './Hexagonal.css';

const Hexagonal = ({ title, icons }) => (
  <div className="hexagonal">
    <h1 className="hexagonal__title">{title}</h1>
    <div className="hexagonal__section">
      {icons.map((icon, index) => {
        const IconComponent = icon.IconComponent;
        return (
          <article
            key={index}
            className={`hexagonal__article ${
              index % 2 === 1 ? 'hexagonal__article--even' : ''
            }`}
          >
            <IconComponent className="hexagonal__icon" />
            <p className="hexagonal__text">{icon.label}</p>
          </article>
        );
      })}
    </div>
  </div>
);

export default Hexagonal;
