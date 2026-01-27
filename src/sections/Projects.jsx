import ProjectCard from "../components/project-card";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>
          A selection of projects showcasing my experience with full-stack
          development and modern web technologies.
        </p>
      </div>

      <div className="projects-grid">
        <ProjectCard
          title="Portfolio Website"
          description="Personal portfolio showcasing my projects, skills, and experience with smooth animations and modern UI."
          tech={["React", "Vite", "CSS", "Framer Motion"]}
          github="https://github.com/sharm-rvrs/portfolio"
          // live="https://your-portfolio-link.com"
        />

        <ProjectCard
          title="Full-Stack Web App"
          description="Authentication-based full-stack application with CRUD features and database integration."
          tech={["C#", ".NET", "React", "SQL"]}
          github="https://github.com/sharm-rvrs/project"
        />
      </div>
    </section>
  );
}
