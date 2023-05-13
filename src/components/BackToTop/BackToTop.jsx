import { FaChevronUp } from 'react-icons/fa';
import './BackToTop.css';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <FaChevronUp className="scrollTop" onClick={scrollToTop} />;
    </>
  );
};

export default BackToTop;
