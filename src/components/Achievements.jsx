export default function Achievements({ achievements }) {
  return (
    <section id="achievements">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">git log --achievements</p>
          <h2>Achievements</h2>
        </div>

        <div className="commit-log">
          {achievements.map((a) => (
            <div className="commit" key={a.id}>
              <div className="commit-hash">{a.commit}</div>
              <div className="commit-title">{a.title}</div>
              <p className="commit-detail">{a.detail}</p>
              <span className="commit-date">{a.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
