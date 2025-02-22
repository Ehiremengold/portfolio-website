import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { projectImg } from "@/public/project-images/export";
import type { StaticImageData } from "next/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ExperienceData = {
  title: string;
  description: string;
};

type ProjectData = {
  name: string;
  description: string;
  img: StaticImageData;
  github: string;
  liveURL: string;
};

export const projectData: ProjectData[] = [
  {
    name: "Nike Clone Landing Page",
    description:
      "A visually stunning and responsive landing page for Nike, built with React, Tailwind CSS, and Framer Motion. It features sleek animations, reusable components, and a modern design optimized for all devices. Perfect for showcasing products, special offers, and customer testimonials.",
    img: projectImg.nike,
    github: "https://github.com/Ehiremengold/nike-landing-page.git",
    liveURL: "https://nike-landing-clone-seven.vercel.app",
  },
  {
    name: "Real Estate Landing Page",
    description:
      "An intuitive and responsive landing page utilizing the power of next and tailwind",
    img: projectImg.haven,
    github: "https://github.com/Ehiremengold/real-estate-landing-page.git",
    liveURL: "https://real-estate-nu-taupe.vercel.app",
  },
  {
    name: "Forcythe-clone",
    description:
      "A clone take home assigment for a mid-level frontend developer role",
    img: projectImg.forcy,
    github: "https://github.com/Ehiremengold/forycthe-clone.git",
    liveURL: "https://forycthe-clone.vercel.app",
  },
  {
    name: "Career Launch Pad Landing Page",
    description:
      "Want to begin a career in tech? Look no further as we show you the ropes even if you want to remain...",
    img: projectImg.stack,
    github: "https://github.com/Ehiremengold/stackwisr-uk.git",
    liveURL: "https://stackwisr-uk.vercel.app",
  },
];

export const experienceData: ExperienceData[] = [
  {
    title: "Stackwisr UK (Since June 2023)",
    description:
      "Spearheaded the setup of multiple local workspaces for streamlined development and collaboration. Enhanced legacy React applications by refactoring components, fixing bugs, and optimizing UI/UX. Containerized Django projects using Docker, ensuring consistent and scalable environments. Managed version control on GitBucket, resolving merge conflicts and supporting efficient team integration.",
  },
  {
    title: "Teqporte (Nov 2021 - Nov 2022)",
    description:
      "Led the development of high-performance web applications, aligning architecture with business needs. Collaborated cross-functionally to deliver user-centric features. Diagnosed and resolved critical system issues to maintain high uptime. Implemented Sentry for real-time error tracking and automated CI/CD pipelines using GitHub Actions, accelerating deployment cycles and maintaining code quality.",
  },
  {
    title: "Nigerian Ports Authority (June 2018 - January 2019)",
    description:
      "Gained foundational experience in web development while providing IT support and maintaining software functionality. Ensured smooth operations by setting up new systems for incoming staff and troubleshooting software issues for team members. Took initiative to learn web development, leading to the creation of my first website before leaving the company. This role laid the groundwork for my journey into software engineering and enhanced my problem-solving and technical support skills.",
  },
];
