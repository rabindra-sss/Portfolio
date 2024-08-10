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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import priyaranjan from "../assets/testimony/priyaranjan.jpeg";
import prikshit from "../assets/testimony/prikshit.jpeg"
import medantrik from "../assets/company/medantrik.png"

import graphql from "../assets/tech/graphql.png"

import chatapp from "../assets/chat-app-ss.png"
import foodapp from "../assets/food-app.png"
import fitness from "../assets/fitness.png"



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
    title: "Backend Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
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
    name: "GraphQL",
    icon: graphql,
  },
  
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Medantrik",
    icon: medantrik,
    iconBg: "white",
    date: "May 2024 - Present",
    points: [
      "Developing full-stack web applications using React.js, Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implementaing machine learning algorithms with backend system for prediction of health conditions",
      "Developing automated real-time data pipeline, reducing manual interventions.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rabindranath proved me wrong.",
    name: "Priyaranjan Tiwari",
    designation: "Founder",
    company: "Medantrik",
    image: priyaranjan,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their company's success like Rabindranth does.",
    name: "Prikshit Hooda",
    designation: "CoFounder/(CTO)",
    company: "Medantrik",
    image: prikshit,
  },

];

const projects = [
  {
    name: "Food App",
    description:
      "Web-based platform that allows users to search, order foods of different categories with add-to-cart and order history options.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: foodapp,
    source_code_link: "https://github.com/rabindra-sss/Myfood",
  },
  {
    name: "Chat App",
    description:
      "A real-time chat application where users can create chatrooms and add other users. Users can manage their profile and track live users.",
    tags: [ 
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/rabindra-sss/CHAT-APP",
  },
  {
    name: "Fitness App",
    description:
    "An application for your fitness where you can find specific exercises for specific muscle groups with videos to help you learn.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rapid API",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/rabindra-sss/Fitness-Club",
  },
];

export { services, technologies, experiences, testimonials, projects };
