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
    name: "Panto",
    description:
      "Need to get minimalistic interior products? Panto is the place to be. It features a clean and modern design, with a focus on showcasing products effectively.",
    img: projectImg.panto,
    github: "https://github.com/Ehiremengold/panto-ecommerce",
    liveURL: "https://panto-ecommerce.vercel.app/",
  },
  {
    name: "Burgry Restaurant",
    description:
      "This Project would make you Crave juicy burgers! Enjoy fresh, 'Flavorful' micro-interactions and animations using framer motion and Tailwind css.",
    img: projectImg.burgry,
    github: "https://github.com/Ehiremengold/burgry-restaurant.git",
    liveURL: "http://burgry-restaurant.vercel.app",
  },
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

  // {
  //   name: "Borderless | Fintech Landing Page",
  //   description:
  //     "Discover innovative financial solutions with our sleek and user-friendly fintech platform. Secure, efficient, and designed for growth.",
  //   img: projectImg.fintech,
  //   github: "https://github.com/Ehiremengold/borderless-landing-page.git",
  //   liveURL: "https://borderless-landing-page-plum.vercel.app",
  // },

  {
    name: "Forcythe-clone",
    description:
      "A clone take home assigment for a mid-level frontend developer role",
    img: projectImg.forcy,
    github: "https://github.com/Ehiremengold/forycthe-clone.git",
    liveURL: "https://forycthe-clone.vercel.app",
  },

  {
    name: "COL-LAB(collab)",
    description:
      "A real-time conversational app for teams in an organisation. Get updated on what your colleagueas are upto",
    img: projectImg.collab,
    github: "https://github.com/Ehiremengold/ui-deplyment.git",
    liveURL: "https://sbsc-collab.vercel.app",
  },
  {
    name: "N and H Construction",
    description:
      "A modern and responsive website built with React, Tailwind CSS and Strapi. It features a sleek design, smooth animations, and a user-friendly interface, showcasing the company's services and projects effectively.",
    img: projectImg.nh,
    github: "",
    liveURL: "https://www.nandhconstructionco.com/",
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
    title: "SBSC (Since April 2025)",
    description:
      "Building upon set up NX mono repos, converting intiutive and engaging UIs to useful tools for organisations, home and abroad",
  },
  {
    title: "Stackwisr UK (June 2024 - Jan 2025)",
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
