"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="sections">
      <div className="flex flex-col items-start container mb-15">
        {/* Section Heading Animation */}
        <motion.h1
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h1>

        {/* Contact Grid Animation */}
        <motion.div
          className="grid gap-5 mt-6 sm:grid-cols-2 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Email Contact Card */}
          <Link href="mailto:ehiremengold@gmail.com">
            <motion.div
              className="py-6 px-8 dark:bg-secondary rounded-lg shadow-sm flex flex-col gap-5 items-start cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span>Email</span>
              <p>ehiremengold@gmail.com</p>
            </motion.div>
          </Link>

          {/* Phone Contact Card */}
          <Link
            href="https://wa.me/2348163355234"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="py-6 px-5 dark:bg-secondary rounded-lg shadow-sm flex flex-col gap-5 items-start cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span>Phone</span>
              <p>+2348163355234</p>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
