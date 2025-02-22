import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import Contact from "./sections/Contact";

export default function Home() {
  // const experienceSectionRef = useRef(null);
  // const projectSectionRef = useRef(null);
  // const technologySectionRef = useRef(null);
  // const contactSectionRef = useRef(null);

  // const experimentIsView = useInView(experienceSectionRef, { once: true });
  // const projectIsInView = useInView(projectSectionRef, { once: true });
  // const technologyIsInView = useInView(technologySectionRef, { once: true });
  // const contactIsInView = useInView(contactSectionRef, { once: true });

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}
