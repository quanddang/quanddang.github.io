import './SectionTitle.css';

const SectionTitle = ({ number, title }) => {
  return (
    <div className="section-title__container">
      <span className="section-title__line"></span>
      <h2 className="section-title__number">{number}</h2>
      <h2 className="section-title__text">{title}</h2>
      <span className="section-title__line"></span>
    </div>
  );
};

export default SectionTitle;
