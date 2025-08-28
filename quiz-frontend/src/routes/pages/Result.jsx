
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addLeaderboardEntry } from "../../api";
import { useAuth } from "../../context/useAuth";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { correct = 0, total = 0 } = location.state || {};
  const incorrect = total - correct;
  const score = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Add leaderboard entry and redirect after 2.5s
  useEffect(() => {
    // Prevent duplicate leaderboard entries for the same user/score within 1 minute
    const entry = {
      name: user?.displayName || user?.email?.split("@")[0] || "Anonymous",
      score,
      timestamp: Date.now(),
    };
    const lastEntryKey = `quiz_leaderboard_last_${entry.name}_${score}`;
    const lastEntry = localStorage.getItem(lastEntryKey);
    let shouldAdd = true;
    if (lastEntry) {
      const lastTime = parseInt(lastEntry, 10);
      if (!isNaN(lastTime) && Date.now() - lastTime < 60000) {
        shouldAdd = false;
      }
    }
    if (shouldAdd) {
      addLeaderboardEntry(entry);
      localStorage.setItem(lastEntryKey, Date.now().toString());
    }
    const timer = setTimeout(() => {
      navigate("/leaderboard");
    }, 2500);
    return () => clearTimeout(timer);
  }, [user, score, navigate]);

  return (
    <main style={{ minHeight: '100vh', background: '#18111b', padding: 0, margin: 0, fontFamily: 'Poppins, Inter, Arial, sans-serif' }}>
      {/* Gap with #18111A background color */}
      <div style={{ height: '40px', background: '#18111A' }} />
      <div className="container fade-in" style={{
        maxWidth: 700,
        margin: '0 auto',
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
        <h2 style={{ fontWeight: 800, fontSize: 28, color: '#fff', textAlign: 'center', marginBottom: 32, letterSpacing: 0 }}>Quiz Results</h2>
        <div style={{
          background: 'rgba(255,255,255,0.10)',
          borderRadius: 14,
          boxShadow: '0 2px 12px #0B3C8922',
          padding: '28px 0 18px 0',
          margin: '0 auto 32px auto',
          maxWidth: 520,
          textAlign: 'center',
          fontWeight: 700,
          fontSize: 22,
          color: '#fff',
          letterSpacing: 0.2,
          border: '1.5px solid #e5eaf2',
        }}>
        <div style={{ color: '#888', fontWeight: 500, fontSize: 18, marginBottom: 6 }}>Total Score</div>
  <span style={{ fontWeight: 900, fontSize: 32, color: '#fff' }}>{score}/100</span>
      </div>
  <div style={{ fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 18 }}>Performance Summary</div>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
        <div style={{
          background: 'rgba(255,255,255,0.10)',
          borderRadius: 12,
          boxShadow: '0 1px 6px #0B3C8911',
          padding: '24px 36px',
          minWidth: 180,
          textAlign: 'center',
          border: '1.5px solid #e5eaf2',
        }}>
          <div style={{ color: '#fff', fontWeight: 500, fontSize: 15, marginBottom: 6 }}>Correct Answers</div>
          <div style={{ fontWeight: 900, fontSize: 28, color: '#00BFA6' }}>{correct}</div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.10)',
          borderRadius: 12,
          boxShadow: '0 1px 6px #0B3C8911',
          padding: '24px 36px',
          minWidth: 180,
          textAlign: 'center',
          border: '1.5px solid #e5eaf2',
        }}>
          <div style={{ color: '#fff', fontWeight: 500, fontSize: 15, marginBottom: 6 }}>Incorrect Answers</div>
          <div style={{ fontWeight: 900, fontSize: 28, color: '#f43f5e' }}>{incorrect}</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 24, color: '#0b84ff', fontWeight: 600, fontSize: 17 }}>
        Saving your score and redirecting to leaderboard...
      </div>
    </div>
    </main>
  );
}
