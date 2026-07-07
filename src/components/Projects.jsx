export default function Projects({ projects }) {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Two plots, two seasons</p>
          <h2>Projects</h2>
          <p>
            Each project laid out like a plot in a field — what it grows, and
            what it took to get there.
          </p>
        </div>

        <div className="plots">
          {projects.map((project) => (
            <article className="plot-card" key={project.id}>
              <div className="plot-index">
                <span className="row-tag">{project.season}</span>
                <span className="row-num">
                  {String(project.row).padStart(2, "0")}
                </span>
              </div>
              <div className="plot-body">
                <h3>{project.name}</h3>
                <p className="plot-subtitle">{project.subtitle}</p>
                <ul>
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="stack-row">
                  {project.stack.map((tech) => (
                    <span className="stack-chip" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
