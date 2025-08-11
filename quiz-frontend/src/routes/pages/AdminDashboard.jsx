import React from "react";

export default function AdminDashboard() {
  return (
    <div className="container fade-in" style={{paddingTop:40}}>
      <h2 style={{fontWeight:700}}>Admin Dashboard</h2>
      <p style={{color:'#6b7280'}}>Here you can create, add, update, and delete questions, and view the leaderboard.</p>
      <div style={{marginTop:32}}>
        <div style={{marginBottom:24}}>
          <button className="btn primary" style={{marginRight:12}}>Add Question</button>
          <button className="btn secondary" style={{marginRight:12}}>Update Question</button>
          <button className="btn secondary" style={{marginRight:12}}>Delete Question</button>
        </div>
        <div style={{marginBottom:24}}>
          <button className="btn primary">View Leaderboard</button>
        </div>
        <div style={{marginTop:32, color:'#b6c2d1'}}>
          <em>Feature implementation coming soon...</em>
        </div>
      </div>
    </div>
  );
}
