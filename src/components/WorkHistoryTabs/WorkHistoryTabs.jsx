import { useState } from 'react';
import './WorkHistoryTabs.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Highlight3DImage from '../Highlight3DImage/Highlight3DImage';
// import HighlightTextImage from '../HighlightTextImage/HighlightTextImage';
// import career from '../../assets/career.jpg';
// import SpinningGlobe from '../SpinningGlobe/SpinningGlobe';

const WorkHistoryTabs = () => {
  // const highlights = [
  //   {
  //     title: 'Diverse Professional Experiences',
  //     body: 'My professional journey has taken me through various industries, each offering unique challenges and rewards, allowing me to broaden my horizons.',
  //   },
  //   {
  //     title: 'Developing a Versatile Skill Set',
  //     body: "Driven by curiosity and a passion for learning, I've switched between fields, gaining a range of skills and perspectives that have enriched my experiences.",
  //   },
  //   {
  //     title: 'Discovering a Passion for Development',
  //     body: 'It was when I entered the realm of software development that I discovered my true calling. I became captivated by the process of crafting functional and visually appealing applications, as well as solving intricate problems through code.',
  //   },
  //   {
  //     title: 'Embracing the Future as a Developer',
  //     body: 'Now, I take pride in identifying as a developer and am enthusiastic about furthering my growth in this dynamic and ever-changing field.',
  //   },
  // ];

  const workHistory = [
    {
      company: 'BrightSocial',
      position: 'Frontend Developer',
      startDate: '2018-06-01',
      endDate: '2020-05-31',
      description: [
        '- Collaborating with UX/UI designers to develop responsive and interactive web designs',
        ' -Translating designs into efficient, maintainable, and scalable code using NextJS and TailwindCSS',
        '- Implementing performance optimizations and ensuring cross-browser compatibility',
        '- Integrating with backend services and APIs for seamless data exchange',
      ],
    },
    {
      company: 'VCCorp',
      position: 'DevNet Engineer',
      startDate: '2021-11-18',
      endDate: '2023-03-31',
      description: [
        '- Automating network infrastructure and applications using various programming languages and tools',
        '- Implementing monitoring and analytics tools to optimize network performance',
        ' - Collaborating with development and network teams to design and implement scalable network solutions',
        '- Ensuring network security and compliance with industry standards',
      ],
    },
    {
      company: 'Theatro',
      position: 'WiFi Engineer',
      startDate: '2018-01-25',
      endDate: '2021-04-01',
      description: [
        '- Designing and deploying wireless networks, including access points, controllers, and management systems',
        '- Conducting site surveys and creating network plans to ensure optimal coverage and performance',
        '- Troubleshooting connectivity issues and optimizing wireless network performance',
        '- Collaborating with network and security teams to maintain network security and compliance',
        '- Staying updated on the latest wireless technologies and industry trends to ensure cutting-edge solutions',
      ],
    },
    {
      company: 'University of Texas at Arlington',
      position: 'Bachelor of Science in Electrical Engineering',
      startDate: '2012-08-21',
      endDate: '2017-12-28',
      description: [
        'Led a team of engineers and designed software architecture.',
        'Participated in various academic projects and research.',
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="work-history-tabs" id="work">
      <SectionTitle number="02" title="Work Journey" />
      {/* <SpinningGlobe />
      <HighlightTextImage
        imageUrl={career}
        altText="My Image"
        highlights={highlights}
      /> */}
      <Highlight3DImage />
      <div className="work-history-tabs__content">
        <div className="work-history-tabs__tabs">
          {workHistory.map((job, index) => (
            <div
              key={index}
              className={`work-history-tabs__tab ${
                index === activeTab ? 'work-history-tabs__tab--active' : ''
              }`}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </div>
          ))}
        </div>
        <div className="work-history-tabs__description">
          <h2>{workHistory[activeTab].position}</h2>
          <h3>{workHistory[activeTab].company}</h3>
          <p className="work-history-tabs__date">
            {new Date(workHistory[activeTab].startDate).toLocaleDateString(
              'en-US',
              {
                year: 'numeric',
                month: 'long',
              }
            )}{' '}
            -{' '}
            {new Date(workHistory[activeTab].endDate).toLocaleDateString(
              'en-US',
              {
                year: 'numeric',
                month: 'long',
              }
            )}
          </p>
          {workHistory[activeTab].description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistoryTabs;
