import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import fallbackData from "./data/resumeData.json";

export default function App() {
  const [data, setData] = useState(fallbackData);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/profile")
      .then((res) => {
        if (!res.ok) throw new Error("API not reachable");
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        // Backend isn't running (e.g. static preview) — keep the bundled fallback.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero profile={data.profile} />
      <About education={data.education} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Achievements achievements={data.achievements} />
      <Contact profile={data.profile} />
      <Footer name={data.profile.name} />
    </>
  );
}
