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
    <main style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', minHeight: '100vh', padding: 0, margin: 0}}>
      {/* Hero Section */}
      <section style={{
        marginTop: '1cm',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 0 24px 0',
        background: 'linear-gradient(120deg, #fbc2eb 0%, #a18cd1 100%)',
        color: '#fff',
        borderRadius: 60,
        boxShadow: '0 4px 32px rgba(161,140,209,0.18)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 260,
        maxWidth: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
      }}>
        <h1 style={{fontWeight:900, fontSize:40, marginBottom:12, color:'#f67280', letterSpacing:'-1px', textShadow:'0 2px 8px #a18cd155'}}>Contact <span style={{color:'#a259c6'}}>QuizTime</span></h1>
        <p style={{fontSize:20, color:'#fff', marginBottom:18, fontWeight:500, textShadow:'0 1px 4px #a18cd155', maxWidth:700, margin:'0 auto'}}>We'd love to hear from you! Reach out with questions, feedback, or partnership ideas. Our team will get back to you as soon as possible.</p>
      </section>

      {/* Contact Form Section */}
      <section style={{margin:'48px auto 0 auto',maxWidth:900,background:'#fff',borderRadius:32,boxShadow:'0 4px 24px #fbc2eb33',padding:'32px 28px',textAlign:'center'}}>
        <h2 style={{color:'#a259c6',fontWeight:800,fontSize:28,marginBottom:10}}>Send Us a Message</h2>
        {submitted ? (
          <div className="contact-success card-pop">
            <h3>Thank you!</h3>
            <p>Your message has been received. We'll get back to you soon.</p>
          </div>
        ) : (
          <form style={{display:'flex',flexDirection:'column',gap:18,maxWidth:500,margin:'0 auto'}} onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{padding:14,borderRadius:12,border:'1px solid #e0e7ff',fontSize:16,outline:'none',boxShadow:'0 1px 4px #a18cd111'}}
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{padding:14,borderRadius:12,border:'1px solid #e0e7ff',fontSize:16,outline:'none',boxShadow:'0 1px 4px #a18cd111'}}
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              style={{padding:14,borderRadius:12,border:'1px solid #e0e7ff',fontSize:16,outline:'none',boxShadow:'0 1px 4px #a18cd111',resize:'vertical'}}
            />
            <button
              type="submit"
              style={{background:'linear-gradient(90deg,#a18cd1,#fbc2eb)',color:'#fff',fontWeight:700,fontSize:18,padding:'12px 0',border:'none',borderRadius:12,boxShadow:'0 2px 8px #a18cd133',cursor:'pointer',transition:'background 0.2s'}}
            >
              Send Message
            </button>
          </form>
        )}
        <div style={{marginTop:28,fontSize:16,color:'#888'}}>
          Or email us at <a href="mailto:support@quiztime.com" style={{color:'#a259c6',textDecoration:'underline'}}>support@quiztime.com</a>
        </div>
      </section>

      {/* Social Section */}
      <section style={{textAlign:'center',marginTop:40}}>
        <h2 style={{fontWeight:900,fontSize:28,color:'#f67280',marginBottom:8}}>Connect with Us</h2>
        <div style={{display:'flex',justifyContent:'center',gap:32,marginTop:12}}>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{color:'#a259c6',fontSize:24,textDecoration:'none'}}>🐦 Twitter</a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{color:'#f67280',fontSize:24,textDecoration:'none'}}>📸 Instagram</a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{color:'#a18cd1',fontSize:24,textDecoration:'none'}}>📘 Facebook</a>
        </div>
      </section>
    </main>
  );
}
