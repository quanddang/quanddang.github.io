import { useState } from 'react';
import { AiOutlineRight, AiOutlineArrowRight } from 'react-icons/ai';
import './Button.css';

const Button = ({ onClick, text }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {text}
      <AiOutlineRight
        className={`button__icon ${hover ? 'button__icon--hidden' : ''}`}
      />
      <AiOutlineArrowRight
        className={`button__icon ${hover ? '' : 'button__icon--hidden'}`}
      />
    </button>
  );
};

export default Button;
