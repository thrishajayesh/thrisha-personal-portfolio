import React from "react";
import { Code2, GraduationCap, Award, Target, BriefcaseBusiness } from "lucide-react";

const skills = [
  ["Programming", "C, Python, Java"],
  ["Web Development", "HTML, CSS, JavaScript, React, Django"],
  ["Database", "SQL, Supabase"],
  ["Tools", "Git, GitHub, VS Code"]
];

export default function About() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-intro">
          <div className="section-label">ABOUT ME</div>
          <h1>A little more <span className="gradient-text">about me.</span></h1>
          <p>I am a BTech Computer Science student who enjoys learning by building projects and exploring the intersection of software, security and design.</p>
        </div>

        <div className="about-layout">
          <div className="about-main">
            <div className="info-card">
              <div className="card-icon"><Code2 size={22}/></div>
              <h3>Personal Introduction</h3>
              <p>
                I am curious about how technology can solve everyday problems. My current focus is strengthening
                my programming fundamentals while developing practical skills in full-stack development and cybersecurity.
              </p>
            </div>

            <div className="info-card">
              <div className="card-icon"><GraduationCap size={22}/></div>
              <h3>Education</h3>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div>
                  <strong>BTech — Computer Science</strong>
                  <span>Currently pursuing</span>
                  <p>Building a strong foundation in programming, data structures, web development and computer science fundamentals.</p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="card-icon"><Award size={22}/></div>
              <h3>Certifications & Achievements</h3>
              <ul className="clean-list">
                <li>Participated in technical project and hackathon activities.</li>
                <li>Developed academic projects using modern web technologies.</li>
                <li>Actively exploring certifications and practical learning opportunities.</li>
              </ul>
            </div>
          </div>

          <aside className="about-side">
            <div className="info-card">
              <div className="card-icon"><Target size={22}/></div>
              <h3>Career Goals</h3>
              <p>To grow into a strong software professional with interests in cybersecurity, full-stack development and research-oriented technology.</p>
            </div>

            <div className="info-card">
              <div className="card-icon"><BriefcaseBusiness size={22}/></div>
              <h3>Work Experience</h3>
              <p className="muted">Currently building experience through academic projects, technical events and independent learning.</p>
            </div>

            <div className="info-card">
              <h3>Technical Skills</h3>
              <div className="skill-bars">
                {skills.map(([name, value]) => (
                  <div className="skill-row" key={name}>
                    <div><strong>{name}</strong><span>{value}</span></div>
                    <div className="bar"><i></i></div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}