import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
      <main style={{ minHeight: '100vh', background: '#18111b', padding: 0, margin: 0, fontFamily: 'Poppins, Inter, Arial, sans-serif' }}>
        {/* Gap with #18111A background color */}
        <div style={{ height: '40px', background: '#18111A' }} />
      {/* Hero Section - Glassy Card */}
      <section style={{
        margin: '0 auto',
        maxWidth: 900,
        borderRadius: 18,
        background: 'radial-gradient(ellipse at 60% 40%, #e6e6b6 0%, #18111b 100%)',
        boxShadow: '0 8px 40px #000a',
        padding: '48px 32px 32px 32px',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 48
      }}>
        <h1 style={{ fontWeight: 900, fontSize: 40, marginBottom: 12, color: '#fff', letterSpacing: '-1px', textShadow: '0 2px 8px #0008' }}>Contact QuizUp</h1>
        <div style={{ fontSize: 18, color: '#fff', opacity: 0.92, marginBottom: 24, maxWidth: 700, margin: '0 auto' }}>
          We'd love to hear from you! Reach out with questions, feedback, or partnership ideas. Our team will get back to you as soon as possible.
        </div>
      </section>

      {/* Contact Form Section - Glassy Card */}
      <section style={{ maxWidth: 900, margin: '0 auto', marginBottom: 32 }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, boxShadow: '0 2px 8px #0002', padding: '32px 28px', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 24, marginBottom: 18 }}>Send Us a Message</h2>
          {submitted ? (
            <div className="contact-success card-pop">
              <h3 style={{ color: '#00BFA6' }}>Thank you!</h3>
              <p style={{ color: '#fff' }}>Your message has been received. We'll get back to you soon.</p>
            </div>
          ) : (
            <form style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 500, margin: '0 auto' }} onSubmit={handleSubmit} autoComplete="off">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                style={{ padding: 14, borderRadius: 12, border: '1px solid #2a1a2e', fontSize: 16, outline: 'none', background: '#22223b', color: '#fff', boxShadow: '0 1px 4px #0002' }}
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{ padding: 14, borderRadius: 12, border: '1px solid #2a1a2e', fontSize: 16, outline: 'none', background: '#22223b', color: '#fff', boxShadow: '0 1px 4px #0002' }}
              />
              <textarea
                placeholder="Your Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                style={{ padding: 14, borderRadius: 12, border: '1px solid #2a1a2e', fontSize: 16, outline: 'none', background: '#22223b', color: '#fff', boxShadow: '0 1px 4px #0002', resize: 'vertical' }}
              />
              <button
                type="submit"
                style={{ background: 'linear-gradient(90deg,#ff4ecd,#a259c6)', color: '#fff', fontWeight: 700, fontSize: 18, padding: '12px 0', border: 'none', borderRadius: 12, boxShadow: '0 2px 8px #a259c633', cursor: 'pointer', transition: 'background 0.2s' }}
              >
                Send Message
              </button>
            </form>
          )}
          <div style={{ marginTop: 28, fontSize: 16, color: '#bdbdbd' }}>
            Or email us at <a href="mailto:support@quizup.com" style={{ color: '#ff4ecd', textDecoration: 'underline' }}>support@quizup.com</a>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section style={{ textAlign: 'center', marginTop: 40 }}>
        <h2 style={{ fontWeight: 900, fontSize: 24, color: '#fff', marginBottom: 8 }}>Connect with Us</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 12 }}>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#a259c6', fontSize: 22, textDecoration: 'none' }}>🐦 Twitter</a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff4ecd', fontSize: 22, textDecoration: 'none' }}>📸 Instagram</a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD600', fontSize: 22, textDecoration: 'none' }}>📘 Facebook</a>
        </div>
      </section>
    </main>
  );
}
