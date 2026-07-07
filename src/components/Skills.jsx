import { useEffect, useRef, useState } from "react";

function SkillGroup({ title, items }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill-group" ref={ref}>
      <h3>{title}</h3>
      {items.map((item) => (
        <div className="skill-row" key={item.name}>
          <div className="skill-row-label">
            <span>{item.name}</span>
            <span>{item.level}%</span>
          </div>
          <div className="skill-bar-track">
            <div
              className="skill-bar-fill"
              style={{ width: visible ? `${item.level}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">What's planted here</p>
          <h2>Skills</h2>
          <p>
            Languages and frameworks I reach for most, rated by how deep I've
            actually gone with each — not just what's on the syllabus.
          </p>
        </div>

        <div className="skills-grid">
          <SkillGroup title="Languages" items={skills.languages} />
          <SkillGroup title="Frameworks" items={skills.frameworks} />
          <SkillGroup title="Databases" items={skills.databases} />
        </div>

        <div style={{ marginTop: 40 }}>
          <h3 style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.95rem",
            color: "var(--text-faint)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            fontWeight: 500,
            marginBottom: 14,
          }}>
            Also brings to the team
          </h3>
          <div className="soft-tags">
            {skills.soft.map((s) => (
              <span className="soft-tag" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
