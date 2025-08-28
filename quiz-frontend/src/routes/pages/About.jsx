import React from "react";

export default function About() {
  return (
    <main style={{ background: '#18111b', minHeight: '100vh', padding: 0, margin: 0, fontFamily: 'Poppins, Inter, Arial, sans-serif' }}>
      {/* Hero Section - Glassy Card */}
  {/* Gap with #18111A background color */}
  <div style={{ height: '40px', background: '#18111A' }} />
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
        <h1 style={{ fontWeight: 900, fontSize: 40, marginBottom: 12, color: '#fff', letterSpacing: '-1px', textShadow: '0 2px 8px #0008' }}>About QuizUp</h1>
        <div style={{ fontSize: 17, color: '#fff', opacity: 0.92, marginBottom: 24, maxWidth: 700, margin: '0 auto' }}>
          QuizUp is a dynamic platform designed to make learning fun and engaging. Our mission is to provide a diverse range of quizzes that cater to all interests and knowledge levels, fostering a community of learners and enthusiasts.
        </div>
        <button style={{ fontSize: 17, padding: '12px 32px', background: '#ff4ecd', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, letterSpacing: 1, boxShadow: '0 2px 8px #ff4ecd33', marginTop: 8 }}>Get Started</button>
      </section>

      {/* Mission Section */}
      <section style={{ maxWidth: 900, margin: '0 auto', marginBottom: 32 }}>
        <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 22, marginBottom: 8, textAlign: 'left' }}>Our Mission</h2>
        <div style={{ color: '#bdbdbd', fontSize: 16, textAlign: 'left' }}>
          At QuizUp, we believe that learning should be an enjoyable experience. Our platform offers a wide variety of quizzes, from general knowledge to specialized topics, ensuring there's something for everyone. We strive to create a supportive environment where users can challenge themselves, expand their knowledge, and connect with others who share their interests.
        </div>
      </section>

     

      {/* Contact Section */}
      <section style={{ maxWidth: 900, margin: '0 auto', marginBottom: 32, textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Contact Us</h2>
        <div style={{ color: '#bdbdbd', fontSize: 16, marginBottom: 18 }}>
          Have questions or feedback? We'd love to hear from you! Reach out to us at <span style={{ color: '#fff' }}>support@quizup.com</span> or follow us on social media for the latest updates and news.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginBottom: 12 }}>
          <button style={{ fontSize: 15, padding: '10px 32px', background: '#23182a', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, letterSpacing: 1 }}>Email Us</button>
          <button style={{ fontSize: 15, padding: '10px 32px', background: '#23182a', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, letterSpacing: 1 }}>Follow Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer modern-footer" style={{ marginTop: 24, background: 'transparent', padding: '32px 0 18px 0', textAlign: 'center', color: '#bdbdbd', fontWeight: 500, fontSize: 15 }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 64, marginBottom: 8 }}>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Contact Us</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginBottom: 8, fontSize: 18 }}>
          <span><i className="fab fa-twitter"></i></span>
          <span><i className="fab fa-instagram"></i></span>
          <span><i className="fab fa-facebook"></i></span>
        </div>
        <br></br>
        <div>©2024 QuizUp. All rights reserved.</div>
      </footer>
    </main>
  );
}
