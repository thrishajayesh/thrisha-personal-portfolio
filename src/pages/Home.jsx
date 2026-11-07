import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, ExternalLink, Code2, Database, ShieldCheck, Sparkles } from "lucide-react";

const skills = ["C", "Python", "Java", "JavaScript", "React", "Django", "SQL", "Git & GitHub"];

const projects = [
  {
    title: "RFID Attendance System",
    tag: "IoT + Web",
    description: "An RFID-based attendance and access control system using ESP32, RC522 and Google Sheets integration.",
    icon: <Database size={21} />
  },
  {
    title: "White Matrix Voting",
    tag: "Full Stack",
    description: "A secure voting interface with authentication, one-vote logic and a simple candidate management flow.",
    icon: <ShieldCheck size={21} />
  },
  {
    title: "ResolveAI",
    tag: "AI Project",
    description: "A multi-agent AI solution designed to analyse problems, collaborate between agents and produce useful outputs.",
    icon: <Sparkles size={21} />
  }
];

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot"></span> Available for learning & opportunities</div>
            <h1>Hi, I'm <span className="gradient-text">Thrisha.</span><br />I build things for the web.</h1>
            <p className="hero-text">
              A Computer Science student exploring full-stack development, cybersecurity and creative technology.
              I enjoy turning ideas into simple, useful digital experiences.
            </p>
            <div className="hero-actions">
              <Link to="/about" className="btn btn-primary">View My Work <ArrowRight size={18}/></Link>
              <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
            </div>
            <div className="mini-stats">
              <div><strong>3+</strong><span>Projects</span></div>
              <div><strong>8</strong><span>Core Skills</span></div>
              <div><strong>∞</strong><span>Ideas to build</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>
            <div className="profile-card">
              <div className="profile-photo">
                <div className="avatar-placeholder">T</div>
              </div>
              <div className="profile-info">
                <span>Computer Science Student</span>
                <strong>Thrisha C Jayesh</strong>
                <small>Kerala, India</small>
              </div>
              <div className="code-float">
                <Code2 size={18}/>
                <span>const dream = "build";</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-strip">
        <div className="container">
          <div className="section-label">TECHNICAL SKILLS</div>
          <div className="skill-list">
            {skills.map(skill => <span className="skill-pill" key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">FEATURED WORK</div>
              <h2>Projects that turn ideas into <span className="gradient-text">reality.</span></h2>
            </div>
            <Link to="/about" className="text-link">More about me <ArrowRight size={16}/></Link>
          </div>

          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">{project.icon}</div>
                <div className="project-tag">{project.tag}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-link">View project <ExternalLink size={15}/></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta">
          <div>
            <div className="section-label">LET'S CONNECT</div>
            <h2>Have an idea? Let's build something <span className="gradient-text">great.</span></h2>
          </div>
          <Link to="/contact" className="btn btn-primary">Start a conversation <ArrowRight size={18}/></Link>
        </div>
      </section>
    </>
  );
}