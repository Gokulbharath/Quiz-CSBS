
import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuizStart() {
  const navigate = useNavigate();

  const handleStart = () => {
    // In a real app, you might fetch questions here or set up quiz state
    navigate("/quiz");
  };

  return (
    <>
      <main style={{ minHeight: '100vh', background: '#18111b', padding: 0, margin: 0, fontFamily: 'Poppins, Inter, Arial, sans-serif' }}>
        {/* Gap with #18111A background color */}
        <div style={{ height: '40px', background: '#18111A' }} />
        <div className="container fade-in" style={{
          maxWidth: 540,
          margin: '0 auto',
          borderRadius: 18,
          background: 'radial-gradient(ellipse at 60% 40%, #e6e6b6 0%, #18111b 100%)',
          boxShadow: '0 8px 40px #000a',
          padding: '48px 32px 32px 32px',
          textAlign: 'left',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: 48
        }}>
          <h2 style={{ fontWeight: 900, fontSize: 28, color: '#000000ff', marginBottom: 18 }}>Quiz Terms & Conditions</h2>
          <ul style={{ color: '#334155', fontSize: 16, lineHeight: 1.7, marginLeft: 0, paddingLeft: 18, marginBottom: 18 }}>
            <li>Each quiz has a set number of questions and a time limit per question.</li>
            <li>No going back to previous questions once answered.</li>
            <li>Points are awarded for correct answers and speed.</li>
            <li>Leaderboard is updated in real time.</li>
            <li>Do not refresh or close the browser during the quiz.</li>
          </ul>
          <div style={{ color: '#f43f5e', fontWeight: 600, fontSize: 15, marginBottom: 10 }}>By starting, you agree to the above terms.</div>
          <button
            className="btn primary modern-btn"
            style={{
              width: '100%',
              fontSize: 28,
              padding: '18px 0',
              borderRadius: 18,
              marginTop: 10,
              background: 'linear-gradient(90deg, #ff4fd8 0%, #a166f4 100%)',
              color: '#fff',
              fontWeight: 800,
              letterSpacing: 1,
              border: 'none',
              boxShadow: '0 2px 12px #a166f488'
            }}
            onClick={handleStart}
          >
            Start Quiz
          </button>
        </div>
      </main>
    </>
  );
}
