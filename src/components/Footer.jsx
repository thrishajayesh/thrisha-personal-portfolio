import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Thrisha<span className="accent">.</span></div>
          <p>Computer Science student building clean, useful and creative digital experiences.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4>Connect</h4>
          <div className="socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a>
            <a href="mailto:hello@example.com" aria-label="Email"><Mail size={19}/></a>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <span>© {new Date().getFullYear()} Thrisha C Jayesh. All rights reserved.</span>
        <span>Made with React <ArrowUpRight size={15}/></span>
      </div>
    </footer>
  );
}