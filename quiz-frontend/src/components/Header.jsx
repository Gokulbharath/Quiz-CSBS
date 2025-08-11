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
    nav("/login");
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
            <img src="/vite.svg" alt="logo" style={{height:32, width:32, display:'inline-block', verticalAlign:'middle', marginLeft:20}} />
            <Link to="/" style={{display:'inline-block', verticalAlign:'middle', fontWeight:800, fontSize:20, marginRight:24}}>QuizTime</Link>
          </div>
          <nav className="nav" style={{display:'flex',alignItems:'center',gap:'18px'}}>
            {user ? (
              <div ref={avatarRef} style={{position:'relative'}}>
                <div className="avatar" style={{cursor:'pointer'}} onClick={() => setDropdown(d => !d)}>
                  <img src="/assets/123.png" alt="Profile" />
                </div>
                {dropdown && (
                  <div style={{position:'absolute',right:0,top:'110%',background:'#fff',boxShadow:'0 4px 16px rgba(0,0,0,0.10)',borderRadius:10,minWidth:160,zIndex:10,padding:'8px 0'}}>
                    <Link to="/admin" style={{display:'block',padding:'10px 18px',color:'#0f172a',textDecoration:'none',fontWeight:500}} onClick={()=>setDropdown(false)}>Admin Dashboard</Link>
                    <Link to="/leaderboard" style={{display:'block',padding:'10px 18px',color:'#0f172a',textDecoration:'none',fontWeight:500}} onClick={()=>setDropdown(false)}>Leaderboard</Link>
                    <button style={{display:'block',width:'100%',padding:'10px 18px',background:'none',border:'none',textAlign:'left',color:'#0f172a',fontWeight:500,cursor:'pointer'}} onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : null}
          </nav>
        </div>
      </header>
    );
  }
  return (
    <header className="site-header">
      <div className="header-inner" style={{paddingLeft: '0', paddingRight: '28px'}}>
        <div className="logo" style={{display:'flex',alignItems:'center',gap:'8px',marginLeft:0}}>
          <img src="/vite.svg" alt="logo" style={{height:32, width:32, display:'inline-block', verticalAlign:'middle', marginLeft:20}} />
          <Link to="/" style={{display:'inline-block', verticalAlign:'middle', fontWeight:800, fontSize:20, marginRight:24}}>QuizTime</Link>
          <nav className="nav" style={{display:'flex',gap:'18px',marginLeft:'12px'}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <nav className="nav" style={{display:'flex',alignItems:'center',gap:'18px'}}>
          {user ? (
            <div ref={avatarRef} style={{position:'relative', display:'flex', alignItems:'center', gap:8}}>
              <div className="avatar" style={{cursor:'pointer', display:'flex', alignItems:'center', gap:8}} onClick={() => setDropdown(d => !d)}>
                <img src="/src/assets/123.png" alt="Profile" style={{height:32, width:32, borderRadius:'50%'}} />
                <span style={{fontWeight:600, color:'#222', fontSize:16}}>{user.displayName || user.email}</span>
              </div>
              {dropdown && (
                <div style={{position:'absolute',right:0,top:'110%',background:'#fff',boxShadow:'0 4px 16px rgba(0,0,0,0.10)',borderRadius:10,minWidth:160,zIndex:10,padding:'8px 0'}}>
                  <Link to="/leaderboard" style={{display:'block',padding:'10px 18px',color:'#0f172a',textDecoration:'none',fontWeight:500}} onClick={()=>setDropdown(false)}>Leaderboard</Link>
                  <button style={{display:'block',width:'100%',padding:'10px 18px',background:'none',border:'none',textAlign:'left',color:'#0f172a',fontWeight:500,cursor:'pointer'}} onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn-link">Sign In</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
