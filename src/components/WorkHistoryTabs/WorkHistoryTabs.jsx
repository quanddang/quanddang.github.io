import { useState } from 'react';
import './WorkHistoryTabs.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Highlight3DImage from '../Highlight3DImage/Highlight3DImage';
import { useInView } from 'react-intersection-observer';

const WorkHistoryTabs = () => {
  let currentDate = new Date();

  const workHistory = [
    {
      company: 'BrightSocial',
      position: 'Frontend Developer',
      startDate: '2022-12-13',
      endDate: currentDate,
      description: [
        '- Implementing a variety of responsive designs to ensure compatibility across multiple browsers and devices.',
        '- Translating designs into efficient, maintainable, and scalable code using NextJS and TailwindCSS',
        '- Collaborating with UX/UI designers to develop responsive and interactive web designs',
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
        '- Created an frontend interface with React and backend Django for 802.1X RADIUS system authentication',
        '- Automating network infrastructure and applications using Python and tools',
        '- Implementing monitoring and analytics tools to optimize network performance',
        '- Collaborating with development and network teams to design and implement scalable network solutions',
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
        '- Solid foundation in electrical engineering principles, with coursework in areas such as circuit analysis, digital systems, electromagnetics, and power systems.',
        '- Experience in designing, building, and testing electrical systems and components, as part of both coursework and independent projects.',
        '- Proficient in programming languages such as C Python enabling me to create efficient software solutions for engineering problems.',
        '- Developed strong problem-solving skills, with the ability to apply engineering principles to real-world situations.',
        '- Demonstrated ability to work effectively in team-based projects, contributing to successful completion of complex engineering tasks.',
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [fadeRef, inView] = useInView({
    triggerOnce: true, // Ensures the animation only happens once
  });

  const itemClasses = `work-history-tabs__content ${inView ? 'fade-in' : ''}`;

  return (
    <section className="work-history-tabs" id="work">
      <SectionTitle number="02" title="Work Journey" />

      <Highlight3DImage />

      <div ref={fadeRef} className={itemClasses}>
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
