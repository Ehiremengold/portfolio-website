/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experienceData } from "@/lib/utils";
const Experience = () => {
  

  return (
    <section className="sections">
      <div className="flex flex-col items-start container">
        <h1 className="section-heading">Experience</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
          {experienceData.map((item, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.li
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-middle h-16">
                  <span className="bg-primary/30 flex size-4 items-center justify-center rounded-full">
                    <span
                      className={`${
                        index !== 0 ? "bg-primary/20" : "bg-primary"
                      } ${index === 0 && "animate-ping"} rounded-full size-3`}
                    ></span>
                  </span>
                </div>
                <div
                  className={`${
                    index % 2 === 0
                      ? "timeline-end ms-4"
                      : "timeline-start me-4"
                  } mb-8`}
                >
                  <div className="card bg-[#1B1631] text-white shadow-xl">
                    <div className="card-body gap-4">
                      <h5
                        className={`card-title text-base ${
                          index !== 0 ? "dark:text-slate-600 text-slate-400" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h5>
                      <p
                        className={`subtle-text !text-base lg:text-left text-justify ${
                          index !== 0 ? "dark:text-slate-600 text-slate-400" : "text-white"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="bg-black dark:bg-white" />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
