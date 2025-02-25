"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const aboutSectionRef = useRef(null);
  const aboutIsInView = useInView(aboutSectionRef, { once: true });

  return (
    <section className="sections">
      <motion.div
        className="flex flex-col items-start container"
        ref={aboutSectionRef}
        initial={{ opacity: 0, y: 100 }}
        animate={aboutIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-heading">About me</h1>
        <article className="prose space-y-4">
          <p className="text-base/relaxed lg:text-left text-justify">
            Hey there, again, I&apos;m Ehis – a front-end maestro who transforms
            designs into stunning, high-performing websites that truly
            captivate. I don’t just build websites; I create experiences.
            Whether it&apos;s a sleek landing page that converts visitors into
            loyal customers or a full-scale web app bursting with seamless
            micro-interactions, I bring every detail to life with precision and
            style.
          </p>
        </article>
      </motion.div>
    </section>
  );
};
export default About;
