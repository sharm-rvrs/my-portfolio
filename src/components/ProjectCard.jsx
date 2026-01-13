import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-stack">
        {tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </motion.div>
  );
}
