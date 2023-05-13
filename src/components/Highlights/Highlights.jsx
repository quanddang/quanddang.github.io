import './Highlights.css';

import { MdOutlineAnimation } from 'react-icons/md';
import { TbListDetails, TbTruckDelivery } from 'react-icons/tb';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { AiOutlineApi } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import { BiCodeBlock } from 'react-icons/bi';

const HighlightItem = ({ highlight }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Apply the 'fade-in' class only once when the element comes into the viewport
  const itemClasses = `highlights__item ${inView ? 'fade-in' : ''}`;

  return (
    <div ref={ref} className={itemClasses}>
      <span className={highlight.iconClass}>{highlight.icon}</span>
      <h1>
        {highlight.title}{' '}
        <span className="highlights__item--subtitle">{highlight.subtitle}</span>
      </h1>
      <p>{highlight.quality}</p>
    </div>
  );
};

const Highlights = () => {
  const size = 45;

  const highlightsData = [
    {
      icon: <FcSmartphoneTablet size={size} />,
      iconClass: 'highlights__icon',
      title: 'Responsive',
      subtitle: 'Web Design',
      quality:
        'I meticulously craft websites that adapt seamlessly to various screen sizes and devices, ensuring a flawless user experience on any platform.',
    },
    {
      icon: <MdOutlineAnimation size={size} />,
      iconClass: 'highlights__icon',
      title: 'Fluid',
      subtitle: 'Animation',
      quality:
        ' Leveraging cutting-edge techniques, I infuse my projects with smooth, engaging animations that elevate the overall aesthetic and keep users captivated.',
    },
    {
      icon: <TbListDetails size={size} />,
      iconClass: 'highlights__icon',
      title: 'Subtle',
      subtitle: 'Detail',
      quality:
        'My keen eye for detail allows me to incorporate nuanced design elements that enrich the visual appeal and user-friendliness of each project I undertake.',
    },
    {
      icon: <AiOutlineApi size={size} />,
      iconClass: 'highlights__icon',
      title: 'APIs and',
      subtitle: 'Integration',
      quality:
        'My proficiency with APIs and third-party integrations enables seamless connectivity between your application and other services.',
    },
    {
      icon: <TbTruckDelivery size={size} />,
      iconClass: 'highlights__icon',
      title: 'Quick',
      subtitle: 'Delivery',
      quality:
        "Committed to efficiency without compromising quality, I consistently deliver stunning, high-performing websites within tight timeframes to meet my clients' needs.",
    },
    {
      icon: <BiCodeBlock size={size} />,
      iconClass: 'highlights__icon',
      title: 'Efficient',
      subtitle: 'Coding',
      quality:
        'My code is clean, efficient, and maintainable, ensuring that the backend logic of your application runs smoothly and is easy to work with in the future.',
    },
  ];

  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName('highlights__item');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div className="highlights" onMouseMove={handleMouseMove}>
      {highlightsData.map((highlight, index) => (
        <HighlightItem key={index} highlight={highlight} />
      ))}
    </div>
  );
};

export default Highlights;
