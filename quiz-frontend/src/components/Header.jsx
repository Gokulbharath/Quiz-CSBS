import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function Header() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const avatarRef = useRef();

  async function handleLogout() {
    await logout();
    nav("/"); // Go to landing page after logout
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setDropdown(false);
      }
    }
    if (dropdown) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdown]);

  const isAdmin = location.pathname.startsWith("/admin");
  const isAdminLogin = location.pathname === "/admin-login";
  if (isAdmin || isAdminLogin) {
    return (
      <header className="site-header">
        <div className="header-inner" style={{paddingLeft: '0', paddingRight: '28px'}}>
          <div className="logo" style={{display:'flex',alignItems:'center',gap:'8px',marginLeft:0}}>
            <img src="/src/assets/logo12.png" alt="logo" style={{height:32, width:32, display:'inline-block', verticalAlign:'middle', marginLeft:20}} />
            <Link to="/" style={{display:'inline-block', verticalAlign:'middle', fontWeight:800, fontSize:20, marginRight:24}}>QuizTime</Link>
          </div>
          <nav className="nav" style={{display:'flex',alignItems:'center',gap:'18px'}}>
            {user && (
              <>
                <div ref={avatarRef} style={{position:'relative', display:'flex', alignItems:'center', gap:10}}>
                  <div className="avatar" style={{cursor:'pointer'}} onClick={() => setDropdown(d => !d)}>
                    <img src="/assets/123.png" alt="Profile" />
                  </div>
                  <button className="btn secondary" style={{marginLeft:16}} onClick={handleLogout}>Logout</button>
                  {dropdown && (
                    <div style={{position:'absolute',right:0,top:'110%',background:'#fff',boxShadow:'0 4px 16px rgba(0,0,0,0.10)',borderRadius:10,minWidth:160,zIndex:10,padding:'8px 0'}}>
                      <Link to="/admin" style={{display:'block',padding:'10px 18px',color:'#0f172a',textDecoration:'none',fontWeight:500}} onClick={()=>setDropdown(false)}>Admin Dashboard</Link>
                      <Link to="/leaderboard" style={{display:'block',padding:'10px 18px',color:'#0f172a',textDecoration:'none',fontWeight:500}} onClick={()=>setDropdown(false)}>Leaderboard</Link>
                    </div>
                  )}
                </div>
              </>
            )}
          </nav>
        </div>
      </header>
    );
  }
  return (
    <header style={{
      width: '100%',
      background: '#18111b',
      borderBottom: '1.5px solid #23182a',
      boxShadow: '0 2px 12px #0002',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      minHeight: 64
    }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        height: 64
      }}>
        {/* Left: Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/src/assets/logo12.png" alt="logo" style={{ height: 26, width: 26, marginRight: 8 }} />
          <Link to="/" style={{ fontWeight: 800, fontSize: 20, color: '#fff', letterSpacing: '-1px', textDecoration: 'none' }}>QuizUp</Link>
        </div>
        {/* Right: Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link to="/" style={{ color: '#fff', fontWeight: 500, fontSize: 15, textDecoration: 'none', padding: '8px 16px', borderRadius: 6, transition: 'background .2s' }}>Home</Link>
          <Link to="/leaderboard" style={{ color: '#fff', fontWeight: 500, fontSize: 15, textDecoration: 'none', padding: '8px 16px', borderRadius: 6, transition: 'background .2s' }}>Leaderboard</Link>
          <Link to="/contact" style={{ color: '#fff', fontWeight: 500, fontSize: 15, textDecoration: 'none', padding: '8px 16px', borderRadius: 6, transition: 'background .2s' }}>Contact</Link>
          <Link to="/about" style={{ color: '#fff', fontWeight: 500, fontSize: 15, textDecoration: 'none', padding: '8px 16px', borderRadius: 6, transition: 'background .2s' }}>About</Link>
          {user ? (
            <button onClick={handleLogout} style={{ marginLeft: 8, background: "linear-gradient(90deg, #ff4fd8 0%, #a166f4 100%)", color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, padding: '8px 20px', border: 'none', boxShadow: '0 2px 8px #0002', transition: 'background .2s', cursor: 'pointer' }}>Logout</button>
          ) : (
            <Link to="/login" style={{ marginLeft: 8, background: "linear-gradient(90deg, #ff4fd8 0%, #a166f4 100%)", color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 8, padding: '8px 20px', textDecoration: 'none', boxShadow: '0 2px 8px #0002', transition: 'background .2s' }}>Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
