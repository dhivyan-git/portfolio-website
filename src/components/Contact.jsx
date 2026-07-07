import { useState } from "react";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // { type: 'ok' | 'err', text }
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus({ type: "ok", text: data.message });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "err", text: err.message || "Couldn't send that — try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Next season</p>
          <h2>Let's build something</h2>
          <p>Open to internships, freelance work, and hackathon teams.</p>
        </div>

        <div className="contact-grid">
          <div>
            <div className="contact-links">
              <a className="contact-link" href={`mailto:${profile.email}`}>
                <span className="icon">@</span> {profile.email}
              </a>
              <a className="contact-link" href={`tel:${profile.phone}`}>
                <span className="icon">#</span> {profile.phone}
              </a>
              <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="icon">in</span> LinkedIn
              </a>
              <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
                <span className="icon">gh</span> GitHub
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                placeholder="What are you building?"
              />
            </div>
            <button className="btn btn-primary" type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Send message"}
            </button>
            {status && (
              <p className={`form-status ${status.type === "ok" ? "ok" : "err"}`}>
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
