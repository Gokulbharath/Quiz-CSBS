import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

export default function Register() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Set display name
      await updateProfile(userCredential.user, { displayName: name });
      nav("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="login-page container fade-in" style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh'}}>
      <div className="login-card card-pop" style={{maxWidth:400,width:'100%',padding:'40px 32px',borderRadius:18,boxShadow:'0 8px 32px rgba(11,132,255,0.08)'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:24}}>
          <img src="/vite.svg" alt="logo" style={{height:48,marginBottom:12}} />
          <h2 style={{margin:0,fontWeight:700,fontSize:28}}>Register</h2>
          <p className="muted" style={{marginTop:8,marginBottom:0}}>Create your account to start the quiz</p>
        </div>
        <form onSubmit={handleRegister} style={{display:'flex',flexDirection:'column',gap:16}}>
          <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} style={{background:'#f2f6fb',border:'none',borderRadius:10,padding:'14px',fontSize:16,marginBottom:0}} required />
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={{background:'#f2f6fb',border:'none',borderRadius:10,padding:'14px',fontSize:16,marginBottom:0}} required />
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} style={{background:'#f2f6fb',border:'none',borderRadius:10,padding:'14px',fontSize:16,marginBottom:0}} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} style={{background:'#f2f6fb',border:'none',borderRadius:10,padding:'14px',fontSize:16,marginBottom:0}} required />
          <button className="btn primary" type="submit" style={{marginTop:8}}>Register</button>
        </form>
        {error && <div style={{color:'red',marginTop:12,textAlign:'center'}}>{error}</div>}
        <div style={{textAlign:'center',marginTop:12}}>
          <button style={{background:'none',border:'none',color:'#7daaff',fontWeight:500,cursor:'pointer'}} onClick={()=>nav("/login")}>Already have an account? Login</button>
        </div>
      </div>
    </div>
  );
}
