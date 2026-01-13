export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Modern responsive portfolio built with React and Framer Motion.</p>
          <div className="tech-stack">
            <span>React</span>
            <span>CSS</span>
            <span>Framer Motion</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Expense Tracker</h3>
          <p>Track daily expenses with clean UI and data visualization.</p>
          <div className="tech-stack">
            <span>React</span>
            <span>SQLite</span>
            <span>Chart.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
