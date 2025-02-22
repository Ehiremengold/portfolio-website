/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectLinks from "../components/ProjectLinks";
import { projectData } from "@/lib/utils";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="relative sections isolate">
      {/* Background Blur Effect */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <div className="flex flex-col items-start container">
        <h1 className="section-heading">Featured Projects</h1>

        {/* Project Grid */}
        <motion.div
          className="grid gap-8 place-content-center grid-cols-1 sm:grid-cols-2 mt-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projectData.map((project, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                className="custom-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h1 className="font-bold text-xl">{project.name}</h1>
                <div className="overflow-hidden rounded-xl group w-full h-40 cursor-pointer">
                  <Image
                    src={project.img}
                    alt={project.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                <p className="line-clamp-2 text-base">{project.description}</p>
                <ProjectLinks {...project} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* View More Button with Hover Animation */}
        {/* <motion.button
          className="mt-10 relative py-3 px-6 text-[15px] tracking-wider font-medium overflow-hidden rounded-lg bg-primary shadow-lg shadow-[#4F39F6]/30 text-white transition-all duration-300 group btn-primary flex items-center justify-start h-auto"
          disabled
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 font-medium font-heading">
            View more
          </span>

          <span className="flex items-center justify-center scale-x-0 group-hover:scale-x-100 transition-all duration-300 size-0 group-hover:size-5 ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right size-5"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </motion.button> */}
      </div>
    </section>
  );
};

export default Projects;
