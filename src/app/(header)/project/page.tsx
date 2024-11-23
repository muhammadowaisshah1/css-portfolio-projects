// ProjectsPage.tsx
"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../component/projectPage.module.css"

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  npxCommand?: string;
}

const cliProjects: Project[] = [
  { title: "Number Guessing Game", description: "A CLI-based number guessing game built in TypeScript, where players guess the hidden number within limited tries.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/number-guessing-game" },
  { title: "To-Do App CLI", description: "A to-do list application via CLI that allows users to manage list easily.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/to-do-list" },
  { title: "Currency Converter App CLI", description: "Converts currency values in real-time using this simple TypeScript CLI tool.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/currency-convertor" },
  { title: "ATM Machine CLI", description: "Simulates an ATM environment, where users can withdraw and deposit using CLI commands.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/cli-atm-machine" },
  { title: "Words Counter App CLI", description: "Counts words and characters in text files or user input.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/word_counter" },
  { title: "CLI Calculator", description: "A command-line calculator capable of basic arithmetic operations.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/simple-calculator" }
];

const nextJsProjects: Project[] = [
  { title: "AI Portfolio", description: "An interactive, animated AI developer portfolio with responsive design using Next.js.", techStack: ["Next.js", "TypeScript", "Tailwind CSS"], liveLink: "/ai-portfolio", repoLink: "https://github.com/your-username/ai-portfolio" }
];

const cssHtmlProjects: Project[] = [
  { title: "Responsive Layout", description: "A basic but flexible layout made with HTML and CSS, adapting to all screen sizes.", techStack: ["HTML", "CSS"], liveLink: "/responsive-layout", repoLink: "https://github.com/your-username/responsive-layout" }
];

const ProjectSection: FC<{ title: string; description: string; projects: Project[]; isCLI?: boolean }> = ({ title, description, projects, isCLI }) => (
  <section className={styles.section}>
    <motion.h2 className={styles.sectionTitle} initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      {title}
    </motion.h2>
    <motion.p className={styles.sectionDescription} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
      {description}
    </motion.p>
    <div className={styles.projectGrid}>
      {projects.map((project, index) => (
        <motion.div key={index} className={styles.projectCard} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.15 }}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <ul className={styles.techList}>
            {project.techStack.map((tech, techIndex) => (
              <li key={techIndex} className={styles.techItem}>{tech}</li>
            ))}
          </ul>
          <div>
            {project.liveLink && (
              <Link href={project.liveLink} className={styles.link}>Live Demo</Link>
            )}
            {project.repoLink && (
              <Link href={project.repoLink} className={styles.link}>GitHub Repository</Link>
            )}
            {isCLI && project.npxCommand && (
              <div className={styles.npxCommand}>
                Run via NPX: <code className={styles.codeBlock}>{project.npxCommand}</code>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProjectsPage: FC = () => (
  <div className={styles.pageContainer}>
    <motion.h1 className={styles.heading} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      Projects
    </motion.h1>
    <motion.p className={styles.sectionDescription} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
    Welcome to my portfolio&#44; where technology meets creativity. I am a passionate developer with expertise in building cutting-edge applications using modern web technologies. Currently&#44; I am expanding my knowledge in <strong>AI Agents</strong>&#44; a field that excites me and promises to revolutionize how we interact with machines.
      <br /><br />
      Explore my projects below to see how I&apos;m combining my passion for development with the exciting possibilities of AI technology.
    </motion.p>
    <ProjectSection title="CLI Projects (TypeScript)" description="TypeScript-powered CLI applications for varied functionalities." projects={cliProjects} isCLI />
    <ProjectSection title="Next.js Projects" description="Next.js projects with a focus on performance and modern UI." projects={nextJsProjects} />
    <ProjectSection title="CSS & HTML Projects" description="Responsive layouts crafted with CSS and HTML for all devices." projects={cssHtmlProjects} />
  </div>
);

export default ProjectsPage;
