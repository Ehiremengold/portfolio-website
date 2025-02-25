"use client"
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const aboutSectionRef = useRef(null);
  const aboutIsInView = useInView(aboutSectionRef, { once: true });

  return (
    <section className="sections">
      <motion.div className="flex flex-col items-start container" 
        ref={aboutSectionRef}
        initial={{ opacity: 0, y: 100 }}
        animate={aboutIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-heading">
          About me
        </h1>
        <article className="prose space-y-4">
          <p className="text-base/relaxed">
            Hi, I&apos;m Ehis, a passionate Fullstack Engineer
            specializing in Django and React. With a strong foundation in
            backend development, frontend design, and API integration, I build
            scalable, high-performance web applications that deliver seamless
            user experiences.
          </p>

          <p className="text-base/relaxed">
            With 4+ years of experience, I&apos;ve worked on diverse projects
            ranging from dynamic web platforms to complex software solutions. I
            prioritize clean code, best practices, and efficiency, ensuring that
            every product I develop is both functional and maintainable.
          </p>

          <p className="text-base/relaxed">
            Beyond coding, I&apos;m always exploring new technologies,
            optimizing workflows, and sharing knowledge within the tech
            community. Whether it&apos;s crafting an intuitive UI, designing
            robust backend systems, or implementing CI/CD pipelines, I bring a
            problem-solving mindset to every project. Let’s build something
            amazing together! 🚀
          </p>
        </article>
      </motion.div>
    </section>
  );
};
export default About;
