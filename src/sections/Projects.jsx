export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Treasure Juniors</h3>
          <p>Lorem Ipsum</p>
          <div className="tech-stack">
            <span>C#</span>
            <span>Unity 3D</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Expense Tracker</h3>
          <p>Track daily expenses with clean UI and data visualization.</p>
          <div className="tech-stack">
            <span>React</span>
            <span>SQLite</span>
            <span>Typescript</span>
          </div>
        </div>
      </div>
    </section>
  );
}
