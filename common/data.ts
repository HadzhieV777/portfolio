import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import djangoEstates from "@/public/djangoEstates.png";
import landWare from "@/public/landware.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// TODO Fix text
export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

// TODO Fix text
export const projectsData = [
  {
    title: "DjangoEstates",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Python", "Django", "HTML", "CSS", "PostgreSQL"],
    imageUrl: djangoEstates,
  },
  {
    title: "LandWare",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: landWare,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SaSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "Python",
  "Django",
  "Java",
  "Quarkus",
  "Gradle",
  "Solidity",
  "Framer Motion",
  "Tailwind",
  "PrimeNg",
  "Linux",
  "Bash",
  "Git",
  "Docker",
  "GraphQL",
  "Apollo",
  "MongoDB",
  "PostgreSQL",
] as const;