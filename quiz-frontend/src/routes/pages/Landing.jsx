import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLeaderboard } from "../../api";
import { useAuth } from "../../context/useAuth";

export default function Landing() {

  const { user } = useAuth();
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      setLoading(true);
      try {
        const data = await getLeaderboard();
        setLeaderboard(data.slice(0, 3));
      } catch {
        setLeaderboard([]);
      }
      setLoading(false);
    }
    fetchLeaderboard();
  }, []);

  const handleStartQuiz = () => {
    if (user) {
      navigate("/quiz/start");
    } else {
      navigate("/login", { state: { from: "/" } });
    }
  };

  return (
    <main style={{
      minHeight: '100vh',
      background: '#18111b',
      padding: 0,
      margin: 0,
      fontFamily: 'Poppins, Inter, Arial, sans-serif'
    }}>
      {/* Hero Section - Glassy Card */}
      {/* Gap with landing page background color */}
  <div style={{ height: '40px', background: '#18111A' }} />
      <section style={{
        margin: '0 auto',
        maxWidth: 900,
        borderRadius: 18,
        background: 'radial-gradient(ellipse at 60% 40%, #e6e6b6 0%, #18111b 100%)',
        boxShadow: '0 8px 40px #000a',
        padding: '48px 32px 48px 32px',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 48
      }}>
        <h1 style={{ fontWeight: 900, fontSize: 44, marginBottom: 18, letterSpacing: '-1.5px', color: '#fff', textShadow: '0 2px 24px #0008' }}>
          Challenge Your Knowledge, Level Up Your Mind
        </h1>
        <div style={{ fontSize: 18, color: '#fff', opacity: 0.85, marginBottom: 32 }}>Login and start your quiz journey today!</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18 }}>
          <button className="btn primary modern-btn" style={{ fontSize: 18, padding: '12px 32px', background: 'linear-gradient(90deg,#ff4ecd,#a259c6)', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 800, letterSpacing: 1, boxShadow: '0 2px 8px #a259c633' }} onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      </section>

      {/* Features Section - Icon Cards */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 0 32px 0' }}>
        <h2 style={{ color: '#fff', fontWeight: 900, fontSize: 32, margin: '0 0 8px 0', letterSpacing: '-1px' }}>Features</h2>
        <div style={{ color: '#bdbdbd', fontSize: 17, marginBottom: 32 }}>Explore the exciting features that make our quiz app stand out.</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'flex-start' }}>
          <div style={{ flex: '1 1 220px', minWidth: 220, background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 24, color: '#fff', boxShadow: '0 2px 8px #0002', border: '1.5px solid #2a1a2e' }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>📝</div>
            <div style={{ fontWeight: 700, fontSize: 19, marginBottom: 6 }}>Take Quizzes</div>
            <div style={{ color: '#bdbdbd', fontSize: 15 }}>Dive into a variety of quizzes across different categories.</div>
          </div>
          <div style={{ flex: '1 1 220px', minWidth: 220, background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 24, color: '#fff', boxShadow: '0 2px 8px #0002', border: '1.5px solid #2a1a2e' }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>🏆</div>
            <div style={{ fontWeight: 700, fontSize: 19, marginBottom: 6 }}>Compete on Leaderboard</div>
            <div style={{ color: '#bdbdbd', fontSize: 15 }}>Challenge friends and other users to climb the ranks.</div>
          </div>
          <div style={{ flex: '1 1 220px', minWidth: 220, background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 24, color: '#fff', boxShadow: '0 2px 8px #0002', border: '1.5px solid #2a1a2e' }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>📈</div>
            <div style={{ fontWeight: 700, fontSize: 19, marginBottom: 6 }}>Track Your Progress</div>
            <div style={{ color: '#bdbdbd', fontSize: 15 }}>Monitor your performance and see how you improve over time.</div>
          </div>
          <div style={{ flex: '1 1 220px', minWidth: 220, background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 24, color: '#fff', boxShadow: '0 2px 8px #0002', border: '1.5px solid #2a1a2e' }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>🎖️</div>
            <div style={{ fontWeight: 700, fontSize: 19, marginBottom: 6 }}>Earn Badges</div>
            <div style={{ color: '#bdbdbd', fontSize: 15 }}>Collect badges for achievements and milestones.</div>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview Table */}
      <section style={{ maxWidth: 900, margin: '0 auto', marginBottom: 48 }}>
        <h2 style={{ color: '#fff', fontWeight: 900, fontSize: 24, margin: '32px 0 12px 0', letterSpacing: '-1px' }}>Leaderboard Preview</h2>
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, boxShadow: '0 2px 8px #0002', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: 16 }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.06)' }}>
                <th style={{ padding: '14px 8px', fontWeight: 700, textAlign: 'left' }}>Rank</th>
                <th style={{ padding: '14px 8px', fontWeight: 700, textAlign: 'left' }}>User</th>
                <th style={{ padding: '14px 8px', fontWeight: 700, textAlign: 'left' }}>Score</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={3} style={{ padding: '16px', textAlign: 'center', color: '#bdbdbd' }}>Loading...</td></tr>
              ) : leaderboard.length === 0 ? (
                <tr><td colSpan={3} style={{ padding: '16px', textAlign: 'center', color: '#bdbdbd' }}>No leaderboard data yet.</td></tr>
              ) : (
                leaderboard.map((entry, idx) => (
                  <tr key={entry._id || idx}>
                    <td style={{ padding: '12px 8px' }}>{idx + 1}</td>
                    <td style={{ padding: '12px 8px' }}>{entry.name}</td>
                    <td style={{ padding: '12px 8px' }}>{entry.score}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer modern-footer" style={{ marginTop: 24, background: 'transparent', padding: '32px 0 18px 0', textAlign: 'center', color: '#bdbdbd', fontWeight: 500, fontSize: 15 }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 8 }}>
          <span>Contact</span>
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>
        <div>© {new Date().getFullYear()} QuizUp. All rights reserved.</div>
      </footer>
    </main>
  );
}
