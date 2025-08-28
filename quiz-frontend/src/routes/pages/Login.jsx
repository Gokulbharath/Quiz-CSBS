import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleGoogleSignIn() {
    try {
      await signInWithPopup(auth, googleProvider);
      nav("/");
    } catch (err) {
      alert("Sign-in failed: " + err.message);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav("/");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  }

  return (
    <main style={{ background: '#18111b', minHeight: '100vh', padding: 0, margin: 0, fontFamily: 'Poppins, Inter, Arial, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <section style={{
        maxWidth: 400,
        width: '100%',
        borderRadius: 18,
        background: 'radial-gradient(ellipse at 60% 40%, #e6e6b6 0%, #18111b 100%)',
        boxShadow: '0 8px 40px #000a',
        padding: '40px 32px',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
          <img src="/src/assets/logo12.png" alt="logo" style={{ height: 48, marginBottom: 12 }} />
          <h2 style={{ margin: 0, fontWeight: 700, fontSize: 28, color: '#fff' }}>Welcome</h2>
          <p style={{ marginTop: 8, marginBottom: 0, color: '#fff', opacity: 0.85 }}>Login to start the quiz</p>
        </div>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ background: '#22223b', border: '1px solid #2a1a2e', borderRadius: 10, padding: '14px', fontSize: 16, color: '#fff' }} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ background: '#22223b', border: '1px solid #2a1a2e', borderRadius: 10, padding: '14px', fontSize: 16, color: '#fff' }} />
          <button className="btn primary" type="submit" style={{ marginTop: 8, background: 'linear-gradient(90deg,#ff4ecd,#a259c6)', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 10, padding: '12px 0', boxShadow: '0 2px 8px #a259c633', cursor: 'pointer' }}>Login</button>
        </form>
        <div style={{ textAlign: 'center', margin: '18px 0', color: '#bdbdbd', fontWeight: 500 }}>OR</div>
  <button className="btn google" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#22223b', color: '#fff', fontWeight: 600, boxShadow: 'none', width: '100%', padding: '14px 0', fontSize: 18, borderRadius: 10, marginBottom: 0, border: '1px solid #2a1a2e' }} onClick={handleGoogleSignIn}>
          <svg width="20" height="20" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.68 2.36 30.74 0 24 0 14.82 0 6.73 5.06 2.69 12.44l7.98 6.2C12.13 13.13 17.62 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.03l7.18 5.59C43.98 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M10.67 28.64a14.5 14.5 0 0 1 0-9.28l-7.98-6.2A23.94 23.94 0 0 0 0 24c0 3.93.94 7.65 2.69 10.84l7.98 6.2z"/><path fill="#EA4335" d="M24 48c6.48 0 11.93-2.15 15.9-5.85l-7.18-5.59c-2 1.36-4.56 2.17-8.72 2.17-6.38 0-11.87-3.63-13.33-8.94l-7.98 6.2C6.73 42.94 14.82 48 24 48z"/></g></svg>
          Login with Google
        </button>
        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <button style={{ background: 'none', border: 'none', color: '#7daaff', fontWeight: 500, cursor: 'pointer' }} onClick={() => nav("/register")}>New Registration</button>
        </div>
        <div style={{ textAlign: 'center', marginTop: 18 }}>
          <button style={{ background: 'none', border: 'none', color: '#fff', fontWeight: 600, cursor: 'pointer' }} onClick={() => nav("/admin-login")}>Admin Login</button>
        </div>
      </section>
    </main>
  );
}
