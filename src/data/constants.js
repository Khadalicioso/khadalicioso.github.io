// IMPORTED LOGO FROM IMAGES

import qcu from "../images/logo/qcu.png";
import crypto_cosmos from "../images/logo/crypto_cosmos.jpg";
import kopibara from "../images/logo/kopibara.png";
import unilink from "../images/logo/unilink.png";
import netflix_clone from "../images/logo/netflix_clone.png";
import job_portal from "../images/logo/job_portal.png";

// IMPORTED ICONS FROM IMAGES

import html from "../images/icons/html.png";
import css from "../images/icons/css.png";
import js from "../images/icons/js.png";
import bootstrap from "../images/icons/bootstrap.png";
import tailwind from "../images/icons/tailwind.png";
import react from "../images/icons/react.png";
import ts from "../images/icons/ts.png";
import next from "../images/icons/next.png";
import node from "../images/icons/node.png";
import express from "../images/icons/express.png";
import csharp from "../images/icons/csharp.png";
import php from "../images/icons/php.png";
import mysql from "../images/icons/mysql.png";
import sqlserver from "../images/icons/sqlserver.png";
import mongodb from "../images/icons/mongodb.png";
import firebase from "../images/icons/firebase.png";
import dotnet from "../images/icons/dotnet.png";
import mui from "../images/icons/mui.png";
import framer from "../images/icons/framer.png";
import git from "../images/icons/git.png";
import netlify from "../images/icons/netlify.png";

// ABOUT ME

export const Bio = {
  name: "Miguel Enrique Dasalla",
  roles: ["Programmer", "Web Developer", "Full-Stack Developer"],
  description:
    "A passionate and detail-oriented web developer committed to crafting captivating digital experiences. I thrive on staying up-to-date with the latest technologies and frameworks to deliver innovative and user-centric solutions.",
  github: "https://github.com/Khadalicioso",
  instagram: "https://www.instagram.com/khadalicioso",
  facebook: "https://www.facebook.com/khadalicioso",
  linkedin: "https://www.linkedin.com/in/miguel-enrique-d-856879341/",
  resume:
    "https://drive.google.com/file/d/1tvkTYO63vX5NT2Md6FG4D5PqUfAlJ88S/view?usp=drive_link",
};

// SKILLS AND TECHNOLOGIES

export const skills = [
  {
    skills: [
      {
        name: "HTML 5",
        image: html,
      },
      {
        name: "CSS 3",
        image: css,
      },
      {
        name: "JavaScript",
        image: js,
      },
      {
        name: "Bootstrap",
        image: bootstrap,
      },
      {
        name: "Tailwind CSS",
        image: tailwind,
      },
      {
        name: "React JS",
        image: react,
      },
      {
        name: "TypeScript",
        image: ts,
      },
      {
        name: "Next JS",
        image: next,
      },
      {
        name: "Node JS",
        image: node,
      },
      {
        name: "Express JS",
        image: express,
      },
      {
        name: "PHP",
        image: php,
      },
      {
        name: "C#",
        image: csharp,
      },
      {
        name: ".NET Core",
        image: dotnet,
      },
      {
        name: "MySQL",
        image: mysql,
      },
      {
        name: "SQL Server",
        image: sqlserver,
      },
      {
        name: "MongoDB",
        image: mongodb,
      },
      {
        name: "Firebase",
        image: firebase,
      },
      {
        name: "Material UI",
        image: mui,
      },
      {
        name: "Framer Motion",
        image: framer,
      },
      {
        name: "Git",
        image: git,
      },
      {
        name: "Netlify",
        image: netlify,
      },
    ],
  },
];

// EXPERIENCES

export const experiences = [
  {
    id: 0,
    role: "Full Stack Developer",
    img: qcu,
    company: "Quezon City University",
    date: "2024 - Present",
    desc: [
      "Developed a feature-rich online coffee ordering system using ASP.NET Core MVC, Entity Framework Core, SQL Server, and Bootstrap.",
      "Developed a student information system subsystem using PHP and MySQL for the Supersystem called UNILINK: Academic Community Web Application.",
      "Implementing responsive design and providing best UX for the users of the system.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "C#",
      "PHP",
      ".NET Core",
      "SQL Server",
      "MySQL",
    ],
  },
];

// PROJECTS

export const projects = [
  {
    id: 4,
    title: "Job Portal",
    date: "December 2024",
    description:
      "This Job Portal is a modern web application that allows users to search for job listings, post job opportunities, and manage their applications. Built using the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS, this application provides a seamless user experience and a responsive design.",
    image: job_portal,
    tags: ["MongoDB", "Express JS", "React JS", "Node JS"],
    source: "https://github.com/Khadalicioso/job-portal.git",
    demo: "",
    status: "inprogress",
  },
  {
    id: 3,
    title: "Netflix Clone",
    date: "November 2024 - December 2024",
    description:
      "A Netflix clone web application built with modern web technologies. This project replicates the core features and UI of Netflix, providing a similar streaming platform experience.",
    image: netflix_clone,
    tags: ["React JS", "Firebase"],
    source: "https://github.com/Khadalicioso/netflix-clone.git",
    demo: "",
    status: "completed",
  },
  {
    id: 2,
    title: "UNILINK - Student Information System and Course Scheduling",
    date: "September 2024 - December 2024",
    description:
      "A subsystem of the UNILINK: Academic Community Web Application, designed to streamline student information management and enhance administrative processes.",
    image: unilink,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    source: "https://github.com/Khadalicioso/UNILINK-SubSystem.git",
    demo: "",
    status: "completed",
  },
  {
    id: 1,
    title: "KOPIBARA",
    date: "September 2024 - December 2024",
    description:
      "KOPIBARA is a modern web-based coffee ordering system developed by the KPL Team as part of the IPT102 - Integrative Programming and Technologies 2 course. Built with ASP.NET Core 8.0, it offers a seamless experience for customers to browse and order a variety of coffee beverages, including both hot and iced options.",
    image: kopibara,
    tags: [".NET Core", "C#", "SQL Server", "PayMongo"],
    source: "https://github.com/Khadalicioso/KOPIBARA.git",
    demo: "",
    status: "completed",
  },
  {
    id: 0,
    title: "Crypto Cosmos",
    date: "August 2024 - September 2024",
    description:
      "CryptoCosmos is a full-stack cryptocurrency marketplace offering real-time data and advanced trading tools. It enables users to explore trending assets and analyze market trends with a responsive design for seamless access across devices.",
    image: crypto_cosmos,
    tags: ["HTML", "CSS", "JavaScript"],
    source: "https://github.com/Khadalicioso/CryptoCosmos.git",
    demo: "",
    status: "completed",
  },
];
