import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  salesforce,
  alentar,
  aow,
  aws,
  msme,
  oasis,
  txon,
  ubs,
  uplift,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "salesforce",
    icon: salesforce,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "RGSTC-MSME CAPIITA Intern",
    company_name: "Government of Maharashtra",
    icon: msme,
    iconBg: "#383E56",
    date: "July 2023 - Ongoing",
    points: [
      "Partnered with RCOEM TBI to meet the growing demand for secure electric vehicle monitoring.",
      "Developed a device for real-time tracking, battery monitoring, and data storage using web/GSM connectivity.",
      "Designed a user-friendly app linked to Firebase, enabling instant access to electric cycle data on location and battery status.",
    ],
  },
  {
    title: "Web Development and Designing Intern",
    company_name: "OASIS INFOBYTE",
    icon: oasis,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "TXON",
    icon: txon,
    iconBg: "#E6DEDD",
    date: "Feb 2023 – March 2023",
    points: [
      "Developing and maintaining web applications using HTML, CSS and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Cloud Virtual Intern",
    company_name: "AWS",
    icon: aws,
    iconBg: "#E6DEDD",
    date: "Dec 2022 – Feb 2023",
    points: [
      "Gained hands on experience in working with AWS platform",
    ],
  },
  {
    title: "Head of Sales & Marketing",
    company_name: "ADS ON WAY",
    icon: aow,
    iconBg: "#383E56",
    date: "March 2022 - June 2022",
    points: [
      "Built company connections with 25+ hospitals in the city.",
    ],
  },
  {
    title: "Operations Executive",
    company_name: "UNIBUZZ SOLUTIONS",
    icon: ubs,
    iconBg: "#E6DEDD",
    date: "March 2022 - May 2022",
    points: [
      "Developed team hierarchy and legal documents.",
      "Example - NDA",
    ],
  },
  {
    title: "Business Development Manager",
    company_name: "ALENTAR ELECTRIC",
    icon: alentar,
    iconBg: "#383E56",
    date: "Oct 2021 - March 2022",
    points: [
      "Represented company to Hon. Chief Minister of MH, India.",
      "Increased networks for company, with 250+ customers including influencers.",
    ],
  },
  {
    title: "Member - The Uplift Project",
    company_name: "GIRLSCRIPT FOUNDATION",
    icon: uplift,
    iconBg: "#383E56",
    date: "June 2021 - Sep 2021",
    points: [
      "Domains: ML + Public Speaking & Storytelling.",
      "Won 3 mini-competitions (b/w 1000+ people)",
      "Best public speaker award.",
    ],
  },
  // {
  //   title: "Mentee - DSA Buddy Program",
  //   company_name: "GIRL CODE IT",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "May 2021 - July 2021",
  //   points: [],
  // },
  // {
  //   title: "Search Quality Rater",
  //   company_name: "WELOCALIZE",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "2022 onwards",
  //   points: [],
  // },
  // {
  //   title: "Voice Over Artist",
  //   company_name: "voices.com",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "2021 onwards",
  //   points: [],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
