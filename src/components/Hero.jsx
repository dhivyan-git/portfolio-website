export default function Hero({ profile }) {
  return (
    <header id="top" className="hero">
      <div className="wrap">
        <div className="hero-copy">
          
          <h1>
            {profile.name}
            <br />
            <span className="accent">grows software</span> the way a field grows a season.
          </h1>
          <p className="hero-lede">
            {profile.tagline}. Based in {profile.location} — currently a B.Tech IT
            undergrad who ships mobile, backend, and ML pieces end to end, from
            soil-data pipelines to spending dashboards.
          </p>

          <div className="hero-meta">
            <span>📍 {profile.location}</span>
            <span>🎓 B.Tech IT · 2023–2027</span>
            <span>🏆 SIH 2025 Finalist</span>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              See the plots →
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="photo-card">
          <img
  src="/photo.jpg"
  alt={profile.name}
  className="profile-photo"
  onError={(e) => {
    e.target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EAdd your photo%3C/text%3E%3C/svg%3E";
  }}
/>
        </div>
      </div>
    </header>
  );
}
