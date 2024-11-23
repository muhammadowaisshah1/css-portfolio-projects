"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// import styles from './HomePage.module.css';  // Import the custom CSS module
import styles from "../app/component/HomePage.module.css"
import "../app/component/HomePage.module.css"
interface HomePageProps {
  profileImageSrc: string;
  name: string;
  description: string;
}

const HomePage: React.FC<HomePageProps> = ({
  profileImageSrc = "/New folder/profile.jpg",
  name = "Muhammad Owais Shah",
  description = "I am a detecated developer focused on creating intelligent and dynamic web applications. Currently diving into the world of AI agent development, I'm learning to build systems that drive innovation and automation."
}) => {
  return (
    <div className={styles.homePage}>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Image Section */}
        <div className={styles.imageWrapper}>
          <motion.div
            className={styles.profileImage}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={profileImageSrc}
              alt={`${name}'s Profile`}
              width={300}
              height={300}
              className={styles.image}
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className={styles.textSection}>
          <motion.h1
            className={styles.title}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m <span className={styles.highlight}>{name}</span>
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>

          <motion.p
            className={styles.skills}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I have honed my skills in <strong>HTML</strong>&#44; <strong>CSS</strong>&#44; <strong>Tailwind CSS</strong>&#44; <strong>JavaScript</strong>&#44; <strong>TypeScript</strong>&#44; <strong>Node.js</strong>&#44; <strong>Next.js</strong>&#44; and <strong>Figma</strong>&#44; which I use to build responsive&#44; visually engaging&#44; and accessible web experiences.
          </motion.p>

          <motion.p
            className={styles.skills}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Currently&#44; I am expanding my expertise into <strong>AI Agents</strong>&#44; learning how to create intelligent systems that can automate tasks&#44; learn from interactions&#44; and solve real-world problems.
          </motion.p>

          <motion.div
            className={styles.buttonWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contact" passHref>
              <button className={styles.contactButton}>
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
