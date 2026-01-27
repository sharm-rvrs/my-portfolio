import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tech = [],
  live,
  code,
}) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* FRONT */}
      <div className="project-front">
        <h3>{title}</h3>

        <div className="tech-stack">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      {/* OVERLAY */}
      <div className="project-overlay">
        <div>
          <h4>Overview</h4>
          <p>{description}</p>
        </div>

        <div className="project-actions">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn primary"
            >
              Live
            </a>
          )}

          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
