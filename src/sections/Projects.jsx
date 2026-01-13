import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        <ProjectCard
          title="Personal Expense Tracker"
          description="A full-stack expense tracking app with authentication and data visualization."
          tech={["React", "Node", "SQLite"]}
        />

        <ProjectCard
          title="Business Entity Management System"
          description="Internal system for managing business entities and sub-entities."
          tech={["React", "TypeScript", "Prisma"]}
        />

        <ProjectCard
          title="Portfolio Website"
          description="A modern, responsive developer portfolio with smooth animations."
          tech={["React", "Vite", "Framer Motion"]}
        />
      </div>
    </section>
  );
}
