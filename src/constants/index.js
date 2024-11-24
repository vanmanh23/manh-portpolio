import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  airbnb,
  jobit,
  tripguide,
  threejs,
  animemovie,
  nextjs,
  nestjs,
  airbnbIcon,
  quiz,
  quizapp,
  fitgym
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Nest.JS",
    icon: nestjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: airbnbIcon,
    iconBg: "#383E56",
    date: "Jan 2022 - April 2023",
    points: [
      "Developed interactive user interfaces with ReactJS, optimizing browser performance.",
      "Used React Hooks to manage state and handle component lifecycles.",
      "Integrated APIs, managed data, and implemented dynamic functionalities on the UI.",
      "Contributed to building features like navigation, forms, and data tables.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: quiz,
    iconBg: "#E6DEDD",
    date: "March 2022 - Feb 2023",
    points: [
      "Developed cross-platform mobile applications with smooth UI and optimized performance.",
      "Built custom components and implemented animations to enhance user experience.",
      "Contributed to building features like onboarding, authentication, and interactive maps.",
      "Collaborated with cross-functional teams to deliver high-quality products.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "airbnb",
    icon: nextjs,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2024",
    points: [
      "Built interactive user interfaces and optimized browser performance.",
      "Worked with technologies such as HTML, CSS, JavaScript, ReactJS, and Tailwind CSS.",
      "Integrated APIs, managed state using Context API or React Hooks, and handled client-side data.",
      "Contributed to developing features like forms, data tables, and dynamic navigation.",
    ],
  },
  {
    title: "Nest.js Developer",
    company_name: "Meta",
    icon: airbnbIcon,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developed RESTful APIs using NestJS, integrated MySQL databases with Prisma.",
      "Designed modules, services, and controllers following microservices architecture.",
      "Implemented user authentication and authorization using JWT and Guards.",
      "Optimized database queries and ensured application security.",
    ],
  },
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
    name: "Airbnb Clone",
    description:
      "Web platform that allows customers to easily search, compare, book, and manage car rentals from multiple providers, providing a hassle-free and efficient solution for all their transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "NestJS",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/vanmanh23/airbnbapp",
    link: "https://airbnbapp-web.vercel.app/",
  },
  {
    name: "Anime Movie",
    description:
      "A web application that allows users to explore a wide selection of anime movies, search for their favorite titles, and access detailed information about each movie, including plot summaries, ratings, and more.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: animemovie,
    source_code_link: "https://github.com/vanmanh23/anime-movie",
    link: "https://anime-movie-jet.vercel.app/",
  },
  {
    name: "Quiz App",
    description:
      "A mobile application that allows users to take interactive quizzes on various topics, track their progress, and challenge friends, offering an engaging and fun way to test knowledge on the go.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Expo",
        color: "",
      },
    ],
    image: quizapp,
    source_code_link: "https://github.com/vanmanh23/quiz-app",
    link: "https://github.com/vanmanh23/quiz-app",
  },

  {
    name: "SoFit Gym",
    description:
      "SoFit Gym is a user-friendly web application for exploring gym facilities, schedules, and fitness classes. Easily browse and book workout sessions with a sleek and modern interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fitgym,
    source_code_link: "https://github.com/vanmanh23/anime-movie",
    link: "https://anime-movie-jet.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
