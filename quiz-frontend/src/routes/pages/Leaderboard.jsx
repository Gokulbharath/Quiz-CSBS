// Leaderboard page: fetches and displays leaderboard entries

import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../../api";

const podiumColors = [
  { bg: "#FFD600", color: "#fff" }, // 1st
  { bg: "#4FC3F7", color: "#fff" }, // 2nd
  { bg: "#F06292", color: "#fff" }, // 3rd
];
const podiumAvatars = [
  "/src/assets/123.png", // 1st place avatar
  "/src/assets/123.png", // 2nd place avatar
  "/src/assets/123.png", // 3rd place avatar
];
const defaultAvatar = "/src/assets/default-avatar.png";

function getAvatar(idx) {
  return podiumAvatars[idx] || defaultAvatar;
}

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getLeaderboard();
        setEntries(data);
      } catch {
        setEntries([]);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  // Calculate accuracy for each entry (if total is available, else fallback to score)
  const getAccuracy = (entry) => {
    if (entry.total && entry.correct) {
      return Math.round((entry.correct / entry.total) * 100) + "%";
    }
    // fallback: treat score as percent
    return entry.score + "%";
  };

  // Podium: top 3
  const podium = entries.slice(0, 3);
  const others = entries.slice(3);

    return (
      <main style={{ minHeight: '100vh', background: '#18111b', padding: 0, margin: 0, fontFamily: 'Poppins, Inter, Arial, sans-serif' }}>
        {/* Glassy Card Section */}
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
          <h2 style={{ fontWeight: 900, fontSize: 36, color: '#fff', textAlign: 'center', marginBottom: 18, letterSpacing: 1, textShadow: '0 2px 12px #0002' }}>Final Results</h2>

          {/* Podium */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 32, margin: "0 auto 40px auto", minHeight: 220 }}>
            {podium.map((entry, idx) => (
              <div key={idx} style={{
                background: podiumColors[idx].bg,
                color: podiumColors[idx].color,
                borderRadius: 24,
                width: 160,
                height: idx === 0 ? 220 : 170,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                boxShadow: "0 8px 32px #0003",
                position: "relative",
                zIndex: 2,
              }}>
                <img
                  src={getAvatar(idx)}
                  alt="avatar"
                  style={{ width: 70, height: 70, borderRadius: "50%", border: "4px solid #fff", marginBottom: 10, marginTop: 48 }}
                />
                <div style={{ margin: '-8px 0 10px 0', textAlign: 'center', fontWeight: 900, fontSize: 22, letterSpacing: 1 }}>
                  {idx === 0 ? <span style={{fontSize:32}}>👑</span> : idx === 1 ? <span style={{fontSize:28}}>🥈</span> : <span style={{fontSize:28}}>🥉</span>}
                </div>
                <div style={{ fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{entry.name}</div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Score: <span style={{ color: "#fff" }}>{entry.score}</span></div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, boxShadow: '0 2px 8px #0002', overflow: 'hidden', marginTop: 24 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: 16 }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <th style={{ padding: '14px 8px', fontWeight: 700, textAlign: 'left' }}>Rank</th>
                  <th style={{ padding: '14px 8px', fontWeight: 700, textAlign: 'left' }}>Player</th>
                  <th style={{ padding: '14px 8px', fontWeight: 700, textAlign: 'left' }}>Score</th>
                  <th style={{ padding: '14px 8px', fontWeight: 700, textAlign: 'left' }}>Total Correct</th>
                  <th style={{ padding: '14px 8px', fontWeight: 700, textAlign: 'left' }}>Total Incorrect</th>
                  <th style={{ padding: '14px 8px', fontWeight: 700, textAlign: 'left' }}>Overall Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, idx) => (
                  <tr key={entry._id || idx}>
                    <td style={{ padding: '12px 8px' }}>{idx === 0 ? <span style={{fontSize:20}}>⭐</span> : idx + 1}</td>
                    <td style={{ padding: '12px 8px', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <img src={getAvatar(idx)} alt="avatar" style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid #e9eef6', marginRight: 6 }} />
                      {entry.name}
                    </td>
                    <td style={{ padding: '12px 8px', color: '#00BFA6', fontWeight: 900 }}>{entry.score}</td>
                    <td style={{ padding: '12px 8px' }}>{entry.correct ?? '-'}</td>
                    <td style={{ padding: '12px 8px' }}>{typeof entry.total === 'number' && typeof entry.correct === 'number' ? entry.total - entry.correct : '-'}</td>
                    <td style={{ padding: '12px 8px' }}>{getAccuracy(entry)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    );
}
