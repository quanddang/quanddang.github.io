import './MySkills.css';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Hexagonal from '../components/Hexagonal/Hexagonal';
import { RiReactjsLine as ReactJS } from 'react-icons/ri';
import { FaNodeJs as NodeJS } from 'react-icons/fa';
import {
  TbBrandMongodb as MongoDB,
  TbBrandDocker as Docker,
  TbBrandMysql as MySQL,
  TbBrandUbuntu as Ubuntu,
  TbBrandGit as Git,
  TbBrandHtml5 as HTML5,
  TbBrandCss3 as CSS3,
  TbBrandThreejs as ThreeJS,
  TbBrandTypescript as Typescript,
  TbBrandNextjs as NextJS,
} from 'react-icons/tb';
import {
  SiNginx as NGinx,
  SiJavascript as JavaScript,
  SiTailwindcss as Tailwind,
  SiDjango as Django,
  SiWebgl as WebGL,
  SiInfluxdb as InfluxDB,
  SiRedux as Redux,
  SiTurborepo as Turborepo,
  SiEslint as ESlint,
} from 'react-icons/si';
import { AiOutlineApi as API } from 'react-icons/ai';
import design from '../assets/design.jpg';
import HighlightTextImage from '../components/HighlightTextImage/HighlightTextImage';

function MySkills() {
  const frontEndIcons = [
    { IconComponent: ReactJS, label: 'ReactJS' },
    { IconComponent: NextJS, label: 'NextJS' },
    { IconComponent: Typescript, label: 'TypeScript' },
    { IconComponent: Tailwind, label: 'TailwindCSS' },
    { IconComponent: Redux, label: 'Redux Toolkit' },
    { IconComponent: HTML5, label: 'HTML5' },
    { IconComponent: CSS3, label: 'CSS3' },
    { IconComponent: JavaScript, label: 'JavaScript' },
    { IconComponent: ThreeJS, label: 'ThreeJS' },
    { IconComponent: WebGL, label: 'WebGL' },
    { IconComponent: Turborepo, label: 'Turborepo' },
    { IconComponent: ESlint, label: 'ESLint' },
  ];

  const backEndIcons = [
    { IconComponent: NodeJS, label: 'NodeJS' },
    { IconComponent: Django, label: 'Django' },
    { IconComponent: MongoDB, label: 'MongoDB' },
    { IconComponent: MySQL, label: 'MySQL' },
    { IconComponent: InfluxDB, label: 'InfluxDB' },
    { IconComponent: Docker, label: 'Docker' },
    { IconComponent: NGinx, label: 'NGinx' },
    { IconComponent: Git, label: 'Git' },
    { IconComponent: Ubuntu, label: 'Ubuntu' },
    { IconComponent: API, label: 'RESTful API' },
  ];

  const highlights = [
    {
      title: 'Full-Stack Expertise',
      body: "As a full-stack developer, I possess expertise in both frontend and backend frameworks, enabling me to create engaging, high-performance applications that meet my clients' needs.",
    },
    {
      title: 'Frontend Specialization',
      body: 'Specializing in modern technologies such as React, and NextJS, I craft responsive and user-friendly interfaces for seamless user experiences.',
    },
    {
      title: 'Backend Proficient',
      body: 'Skilled in server-side solutions, I work with Node.js, Express, and Django to design and implement efficient and scalable applications.',
    },
    {
      title: 'Adapting to Technological Advances',
      body: 'Eager to learn and adapt, I stay updated with the latest advancements in web development to ensure my projects remain at the cutting edge.',
    },
  ];

  return (
    <section className="mySkills" id="mySkills">
      <SectionTitle number="03" title="My Skills" />
      <HighlightTextImage
        imageUrl={design}
        altText="Skills Icon"
        highlights={highlights}
      />
      <Hexagonal title="Frontend Development" icons={frontEndIcons} />
      <Hexagonal title="Backend Development" icons={backEndIcons} />
    </section>
  );
}

export default MySkills;
