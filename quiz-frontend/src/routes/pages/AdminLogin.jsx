import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const nav = useNavigate();
  const [error, setError] = useState("");
  const [adminCode, setAdminCode] = useState("");
  // removed unused loading state

  function handleAdminLogin(e) {
    e.preventDefault();
    if (adminCode !== "admin123") {
      setError("Invalid admin code.");
      return;
    }
    nav("/admin");
  }

  return (
    <div className="login-page container fade-in" style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh'}}>
      <div className="login-card card-pop" style={{maxWidth:400,width:'100%',padding:'40px 32px',borderRadius:18,boxShadow:'0 8px 32px rgba(11,132,255,0.08)'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:24}}>
          <img src="/vite.svg" alt="logo" style={{height:48,marginBottom:12}} />
          <h2 style={{margin:0,fontWeight:700,fontSize:28}}>Admin Login</h2>
          <p className="muted" style={{marginTop:8,marginBottom:0}}>Enter admin code to access admin dashboard</p>
        </div>
        <form onSubmit={handleAdminLogin} style={{display:'flex',flexDirection:'column',gap:16}}>
          <input
            type="password"
            placeholder="Enter admin code"
            value={adminCode}
            onChange={e => setAdminCode(e.target.value)}
            style={{background:'#f2f6fb',border:'none',borderRadius:10,padding:'14px',fontSize:16,marginBottom:0}}
          />
          <button
            className="btn primary"
            type="submit"
            style={{width:'100%',padding:'14px 0',fontSize:18,borderRadius:10,marginBottom:0}}
            // removed disabled loading
          >
            Login
          </button>
        </form>
        {error && <div style={{color:'red',marginTop:8}}>{error}</div>}
      </div>
    </div>
  );
}
