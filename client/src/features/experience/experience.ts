export interface Experience {
  id: number;
  organization: string;
  jobTitle: string;
  location: string;
  startDate: Date;
  endDate: Date;
  highlights: string[];
  technologiesUtilized: string[];
}

export const experienceList: Experience[] = [
  {
    id: 3,
    organization: 'Mosaic Manufacturing',
    jobTitle: 'Software Developer',
    location: 'Toronto, Ontario, Canada',
    startDate: new Date(2022, 6),
    endDate: new Date(2025, 10),
    highlights: [
      'Led development of automation software for a 3D printer production line using python and FastApi, increasing factory throughput by 4× through workflow orchestration, hardware integration, and reliability improvements',

      'Designed and implemented networking and messaging logic enabling secure, reliable communication between physical printers and cloud services using MQTT',

      'Contributed to backend and cloud API development and maintenance supporting device, telemetry, and client-facing software features',

      'Co-developed automated 3D printer testing software, collaborated with mechanical engineers to ensure reliability of critical hardware components',

      'Worked across hardware, firmware-adjacent logic, and application software in a startup environment, adapting quickly to shifting priorities and undefined problem spaces',

      'Collaborated with teams to translate operational and manufacturing needs into production-ready software solutions for 3D printers built in NodeJs and Nest',
    ],
    technologiesUtilized: ['Typescript', 'Python', 'Linux', 'NestJs', 'MQTT'],
  },
  {
    id: 2,
    organization: 'Syacc Systems Inc.',
    jobTitle: 'Full Stack Software Developer',
    location: 'Brampton, Ontario, Canada',
    startDate: new Date(2020, 9),
    endDate: new Date(2022, 7),
    highlights: [
      'Developed production-ready, multi-platform applications for internal and enterprise use',

      'Engineered robust B2B e-commerce platform using Angular and C#/.Net managing complex catalog hierarchies for enterprise manufacturing clients',

      'Collaborated with senior engineers to define requirements and translate them into technical designs and deliverables',

      'Built a CI/CD pipeline for mobile applications using Ionic Appflow, streamlining releases and reducing deployment friction',
    ],
    technologiesUtilized: [
      'C#',
      '.Net Core',
      'Angular',
      'Typescript',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 1,
    organization: 'Magna International',
    jobTitle: 'Jr. Programmer',
    location: 'Windsor, Ontario, Canada',
    startDate: new Date(2020, 2),
    endDate: new Date(2020, 6),
    highlights: [
      'Modernized legacy systems by developing two proprietary front-end applications and a REST API using Angular and C#/.Net core which allowed employees to communicate concerns and comments to HR department',

      'Conducted requirements engineering by working with HR stakeholders to gather specifications for and validate functionality of applications',
    ],
    technologiesUtilized: ['Typescript', 'C#', 'Angular', '.Net Core'],
  },
];
