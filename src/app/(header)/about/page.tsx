"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
// import styles from './AboutPage.module.css';
import styles from "../../component/AboutPage.module.css"
import "../../component/AboutPage.module.css"
const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Header */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.headerTitle}>About Me</h1>
        <p className={styles.headerSubtitle}>Explore my journey&#44; skills&#44; and expertise.</p>
      </motion.header>

      {/* Main Content */}
      <motion.div
        className={styles.contentBox}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Intro Section */}
        <section>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Full-Stack Developer
          </motion.h2>
          <motion.p
            className={styles.sectionText}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I am a passionate Full-Stack Developer with expertise in HTML&#44; CSS&#44; JavaScript&#44; TypeScript&#44; Node.js&#44; Next.js&#44; and Figma. Currently&#44; I am diving into the world of AI agent development&#44; learning to harness AI is potential to build intelligent solutions.
          </motion.p>
        </section>

        {/* Skills Section */}
        <section>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
           <strong> My Expertise</strong>
          </motion.h2>
          <motion.ul
            className={styles.skillsList}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <li>HTML, CSS, Tailwind</li>
            <li>JavaScript&#44; TypeScript</li>
            <li>Node.js&#44; Next.js</li>
            <li>Figma for UI/UX design</li>
            <li>AI Agent Development (in progress)</li>
          </motion.ul>
        </section>

        {/* Education Section */}
        <section>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <strong>Education</strong>
          </motion.h2>
          <motion.p
            className={styles.sectionText}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           <strong>matriculation</strong> from [<strong> The New Beacon Academy </strong>] <br></br> <strong>college</strong> from [ <strong> Degree College Kohsar </strong>]. <br />
            Currently pursuing AI Agent Development through the Governor is Initiative in Karachi&#44; focusing on emerging AI technologies.
          </motion.p>
        </section>

        {/* CV Section */}
        <section>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Download My CV
          </motion.h2>
          <motion.div
            className={styles.cvButtonContainer}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/cv.pdf" passHref>
              <span className={styles.cvButton}>View CV</span>
            </Link>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};

export default AboutPage;
