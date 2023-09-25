import { useState } from 'react';
import './WorkHistoryTabs.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Highlight3DImage from '../Highlight3DImage/Highlight3DImage';
import { useInView } from 'react-intersection-observer';

const WorkHistoryTabs = () => {
  const workHistory = [
    {
      company: 'Epoch Media Group',
      position: 'Frontend Developer',
      location: 'Remote, US',
      startDate: '12/2022',
      endDate: 'Present',
      description: [
        '- Implemented interactive features to social media application using frameworks and libraries including NextJS, TypeScript, Redux, and TailwindCSS, enhancing the user experience and increasing overall user engagement',
        '- Created scalable, maintainable, and reusable components for future use, leading to greater efficiency and consistency across multiple projects.',
        '- Collaborated with backend developers to integrate RESTful APIs,  ensuring seamless data exchange and enhancing application functionality.',
        '- Worked closely with UI/UX designers to translate designs into functional web pages, maintaining brand consistency and standardizing UI elements across the site.',
        '- Implementing codebase refactoring and performance optimizations.',
        '- Projects worked on: TheEpochTimes, BrightSocial, and Paywall',
      ],
    },
    {
      company: 'VCCorp',
      position: 'DevNet Engineer',
      location: 'Hanoi, Vietnam',
      startDate: '11/2021',
      endDate: '03/2023',
      description: [
        '- Created a full stack solution for 802.1X RADIUS user authentication system utilizing ReactJS, Django, NGinx, and MySQL DB.',
        '- Automated network infrastructure, implemented monitor and analytics tools to alert and optimize network performance with Python scripts, webhooks, web crawlers, APIs,  Linux servers, and Grafana.',
        '- Built a fleet of Raspberry Pi devices to monitor Access Point quality using Python, and stored data into Prometheus DB.',
        '- Redesigned and overhauled the organization WiFi system to improve performance, capacity, speed, and security.',
        '- Fixed network problems, assisted end users, and ensured day-to-day network quality for the organization.',
      ],
    },
    {
      company: 'Theatro',
      position: 'WiFi Engineer',
      location: 'Richardson, Texas US',
      startDate: '01/2018',
      endDate: '04/2021',
      description: [
        '- Conducted site-surveys and deployed Theatro VoWiFi voice solution to hundreds of large format stores for US enterprises including Walgreen, Macy, Total Wine & More, Home Depot, Cabelas, Neiman Marcus, etc.',
        '- Troubleshooting connectivity issues and optimizing wireless network performance by analyzing WiFi data logs using various parameters including authentication, roaming, RF coverage, voice quality, interference, packet drops, throughput, transmit power.',
        '- Provided Access Point design and remediation reports to optimize client WiFi network for high density deployment.',
        "- Cooperated and communicated with client network engineers to integrate the company's servers and devices into client internal networks.",
        '- Staying updated on the latest wireless technologies and industry trends to ensure cutting-edge solutions',
      ],
    },
    {
      company: 'University of Texas at Arlington',
      position: 'Bachelor of Science in Electrical Engineering',
      location: 'Arlington, TX',
      startDate: '08/2012',
      endDate: '12/2017',
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
          <h3>
            {workHistory[activeTab].company} - {workHistory[activeTab].location}
          </h3>
          <p className="work-history-tabs__date">
            {workHistory[activeTab].startDate}
            {' - '}
            {workHistory[activeTab].endDate}
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
