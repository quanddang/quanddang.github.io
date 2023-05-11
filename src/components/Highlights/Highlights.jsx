import { MdOutlineAnimation, MdOutlineDesignServices } from 'react-icons/md';
import { TbListDetails, TbTruckDelivery } from 'react-icons/tb';
import { TfiCamera } from 'react-icons/tfi';
import { FcSmartphoneTablet } from 'react-icons/fc';
import './Highlights.css';

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
    icon: <MdOutlineDesignServices size={size} />,
    iconClass: 'highlights__icon',
    title: 'User experience',
    subtitle: 'Design',
    quality:
      'I prioritize usability and intuitiveness in my designs, meticulously shaping each website layout and functionality to maximize user satisfaction and engagement.',
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
    icon: <TfiCamera size={size} />,
    iconClass: 'highlights__icon',
    title: 'Beautiful',
    subtitle: 'Photography',
    quality: 'testing',
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

const Highlights = () => {
  return (
    <div className="highlights" onMouseMove={handleMouseMove}>
      {highlightsData.map((highlight, index) => (
        <div key={index} className="highlights__item">
          <span className={highlight.iconClass}>{highlight.icon}</span>
          <h1>
            {highlight.title}{' '}
            <span className="highlights__item--subtitle">
              {highlight.subtitle}
            </span>
          </h1>
          <p>{highlight.quality}</p>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
