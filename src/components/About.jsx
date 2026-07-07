export default function About({ education }) {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Field notes</p>
          <h2>About</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm an Information Technology undergrad at Karpagam Institute of
              Technology, Coimbatore, with a habit of picking projects that
              force me to touch the whole stack — mobile front end, backend
              APIs, and the ML model in between.
            </p>
            <p>
              That range showed up clearly at Smart India Hackathon 2025,
              where our team built an on-device crop advisory app all the way
              to the national grand finale. I like problems where the data is
              messy, the users aren't developers, and the interface has to
              disappear so the answer can show up fast.
            </p>
          </div>
          <ul className="edu-list">
            {education.map((edu) => (
              <li className="edu-item" key={edu.id}>
                <h4>{edu.degree}</h4>
                <p className="edu-school">{edu.school}</p>
                <p className="edu-meta">
                  {edu.period} · {edu.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
