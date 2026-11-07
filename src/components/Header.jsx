import React from "react";
import { NavLink } from "react-router-dom";
import { Code2 } from "lucide-react";

export default function Header() {
  const linkClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand">
          <span className="brand-mark"><Code2 size={20} /></span>
          <span>Thrisha<span className="accent">.</span></span>
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink className={linkClass} to="/">Home</NavLink>
          <NavLink className={linkClass} to="/about">About</NavLink>
          <NavLink className={linkClass} to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}