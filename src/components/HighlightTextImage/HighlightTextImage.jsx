import PropTypes from 'prop-types';
import './HighlightTextImage.css';

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
          <div key={index} className="highlight-text-image__section">
            <h3 className="highlight-text-image__title">{title}</h3>
            <p className="highlight-text-image__body">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

HighlightTextImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HighlightTextImage;
