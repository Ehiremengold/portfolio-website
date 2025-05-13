"use client";

import { motion } from "framer-motion";

const frontendTools: string[] = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Typescript",
  "NextJS",
  "Tailwind",
  "Flutter",
  "Framer Motion",
  "SHADCN UI",
  "NEXT UI",
  "Material UI",
  "Mantine",
];

const backendTools: string[] = [
  "Django",
  "REST API",
  "PostgreSQL",
  "AWS",
  "Digital Ocean",
];

const otherTools: string[] = [
  "Figma",
  "Clean Architecture",
  "Nx mono repo",
  "Git",
  "Sentry",
  "Redux",
  "Zustand",
  "Docker",
  "Postman",
  "SEO Optimization",
];

const Technologies = () => {
  return (
    <section className="relative isolate sections">
      <div className="flex flex-col items-start container">
        <motion.h1
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technologies Used
        </motion.h1>

        <motion.p
          className="subtle-text !text-base dark:!text-slate-200 text-black lg:text-left text-justify"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A dynamic problem solver with over 4 years of programming experience,
          I have worked with various languages, libraries, and technology
          stacks, refining my expertise in frontend, backend, and app
          development.
        </motion.p>

        <div className="space-y-8 mt-6">
          {/* Frontend Tools */}
          <motion.div
            className="flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <h2 className="font-semibold">Frontend Tools</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {frontendTools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-gray rounded-lg py-2 px-5 dark:text-white text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Tools */}
          <motion.div
            className="space-10 flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <h2 className="font-semibold">Backend Tools</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {backendTools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="whitespace-nowrap bg-slate-gray rounded-lg py-2 px-5 dark:text-white text-black dark:bg-secondary bg-white shadow-md"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Technologies */}
          <motion.div
            className="space-10 flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <h2 className="font-semibold">Other Technologies</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {otherTools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="whitespace-nowrap bg-slate-gray rounded-lg py-2 px-5 dark:text-white text-black dark:bg-secondary bg-white shadow-md"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient Effect */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-40"
        aria-hidden="true"
      >
        <motion.div
          className="relative left-[calc(50%-5rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Technologies;
