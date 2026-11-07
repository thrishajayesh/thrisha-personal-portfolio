import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

const initial = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.subject.trim() || !form.message.trim()) {
      return "Please fill in all required fields.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }
    if (!/^[0-9+\-\s()]{10,15}$/.test(form.phone)) {
      return "Please enter a valid phone number.";
    }
    return "";
  };

  const submit = (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }
    setStatus({ type: "success", message: "Thank you! Your message has been submitted successfully." });
    setForm(initial);
  };

  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-intro">
          <div className="section-label">CONTACT</div>
          <h1>Let's start a <span className="gradient-text">conversation.</span></h1>
          <p>Have a project idea, opportunity or simply want to say hello? Send me a message.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-card contact-card">
              <h3>Get in touch</h3>
              <p>I'm always happy to connect, learn and discuss interesting ideas.</p>
              <div className="contact-item"><span><Mail size={18}/></span><div><small>Email</small><strong>thrishacjayesh@gmail.com</strong></div></div>
              <div className="contact-item"><span><Phone size={18}/></span><div><small>Phone</small><strong>+91 9747421621</strong></div></div>
              <div className="contact-item"><span><MapPin size={18}/></span><div><small>Location</small><strong>Kerala, India</strong></div></div>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit} noValidate>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.type === "success" ? <CheckCircle2 size={18}/> : <AlertCircle size={18}/>}
                {status.message}
              </div>
            )}

            <div className="form-grid">
              <label>Name<input name="name" value={form.name} onChange={update} placeholder="Thrisha C Jayesh" /></label>
              <label>Email<input name="email" value={form.email} onChange={update} placeholder="thrishacjayesh@gmail.com" /></label>
              <label>Phone Number<input name="phone" value={form.phone} onChange={update} placeholder="+91 9747421621" /></label>
              <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What is this about?" /></label>
            </div>
            <label>Message<textarea name="message" value={form.message} onChange={update} rows="6" placeholder="Write your message here..."></textarea></label>
            <button className="btn btn-primary submit-btn" type="submit">Send Message <Send size={17}/></button>
          </form>
        </div>
      </div>
    </section>
  );
}