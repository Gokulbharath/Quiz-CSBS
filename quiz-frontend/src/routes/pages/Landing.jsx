import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

export default function Landing() {
  const { user } = useAuth();
  const navigate = useNavigate();

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
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
      padding: 0,
      margin: 0
    }}>
      {/* Hero Section - Redesigned */}
      <section style={{
        marginTop: '1cm', // add space from navbar
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 0 24px 0',
        background: 'linear-gradient(120deg, #a18cd1 0%, #fbc2eb 100%)',
        color: '#fff',
        borderRadius: 60, // fully rounded corners
        boxShadow: '0 4px 32px rgba(251,194,235,0.18)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 460,
        maxWidth: 1300,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {/* Glassmorphism effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255,255,255,0.10)',
          backdropFilter: 'blur(6px)',
          zIndex: 0
        }} />
        <div style={{flex: '1 1 220px', display:'flex', justifyContent:'center', alignItems:'center', minWidth:160, zIndex:1}}>
          <div style={{background:'#fff',borderRadius:40,padding:18,boxShadow:'0 8px 32px #fbc2eb33',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img src="/src/assets/QUIZ.png" alt="quiz" style={{height:360, borderRadius:32}} />
          </div>
        </div>
        <div style={{flex: '2 1 260px', minWidth:200, padding:'0 16px', maxWidth:400, zIndex:1}}>
          <h1 style={{fontWeight:900, fontSize:32, marginBottom:8, color:'#a259c6', letterSpacing:'-1px', textShadow:'0 2px 8px #fbc2eb55'}}>Welcome to <span style={{color:'#f67280'}}>QuizTime</span></h1>
          <p style={{fontSize:16, color:'#fff', marginBottom:12, fontWeight:500, textShadow:'0 1px 4px #fbc2eb55'}}>Test your knowledge, compete with friends, and climb the leaderboard. Join a vibrant community of quiz enthusiasts!</p>
          <ul style={{margin:'12px 0 16px 0',padding:0,listStyle:'none',color:'#f67280',fontWeight:600,fontSize:15,display:'flex',gap:16,flexWrap:'wrap'}}>
            <li>⚡ Real-time quizzes</li>
            <li>🏆 Live leaderboard</li>
            <li>📱 Mobile-friendly</li>
            <li>🎨 Modern UI</li>
          </ul>
          <button className="btn primary modern-btn" style={{fontSize:16,padding:'12px 28px',marginTop:4,background:'linear-gradient(90deg,#f67280,#a18cd1)',color:'#fff',border:'none',borderRadius:10,boxShadow:'0 2px 8px #fbc2eb33',fontWeight:800,letterSpacing:1}} onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      </section>

      {/* Features Section */}
      <section style={{padding:'60px 0 40px 0', background:'#f8fafc'}}>
        <h2 style={{textAlign:'center',fontWeight:900,fontSize:36,marginBottom:32,color:'#0ea5e9',letterSpacing:'-1px'}}>Why Choose QuizTime?</h2>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:32}}>
          <div style={{background:'linear-gradient(120deg,#fbbf24 0%,#f472b6 100%)',color:'#fff',borderRadius:24,padding:'32px 28px',minWidth:220,maxWidth:320,boxShadow:'0 4px 24px #fbbf2433',flex:'1 1 220px'}}>
            <h3 style={{fontWeight:800,fontSize:22,marginBottom:10}}>Timed Questions</h3>
            <p style={{fontSize:16,opacity:0.95}}>Challenge yourself with time-limited quizzes and boost your quick thinking.</p>
          </div>
          <div style={{background:'linear-gradient(120deg,#6366f1 0%,#0ea5e9 100%)',color:'#fff',borderRadius:24,padding:'32px 28px',minWidth:220,maxWidth:320,boxShadow:'0 4px 24px #6366f133',flex:'1 1 220px'}}>
            <h3 style={{fontWeight:800,fontSize:22,marginBottom:10}}>Live Leaderboard</h3>
            <p style={{fontSize:16,opacity:0.95}}>Compete globally and see your rank update in real time.</p>
          </div>
          <div style={{background:'linear-gradient(120deg,#0ea5e9 0%,#fbbf24 100%)',color:'#fff',borderRadius:24,padding:'32px 28px',minWidth:220,maxWidth:320,boxShadow:'0 4px 24px #0ea5e933',flex:'1 1 220px'}}>
            <h3 style={{fontWeight:800,fontSize:22,marginBottom:10}}>Instant Results</h3>
            <p style={{fontSize:16,opacity:0.95}}>Get instant feedback and analytics after every quiz.</p>
          </div>
          <div style={{background:'linear-gradient(120deg,#f472b6 0%,#6366f1 100%)',color:'#fff',borderRadius:24,padding:'32px 28px',minWidth:220,maxWidth:320,boxShadow:'0 4px 24px #f472b633',flex:'1 1 220px'}}>
            <h3 style={{fontWeight:800,fontSize:22,marginBottom:10}}>Achievements</h3>
            <p style={{fontSize:16,opacity:0.95}}>Earn badges and rewards for your quiz milestones.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{marginTop:40, textAlign:'center',paddingBottom:60}}>
        <h2 style={{fontWeight:900,fontSize:32,color:'#6366f1',marginBottom:12}}>Ready to get started?</h2>
        <p style={{fontSize:18, color:'#0ea5e9', marginBottom:16}}>Sign up now and unlock your first badge! Compete, learn, and have fun with QuizTime.</p>
        <button className="btn primary modern-btn" style={{fontSize:22,padding:'18px 40px',marginTop:8,background:'linear-gradient(90deg,#fbbf24,#6366f1)',color:'#fff',border:'none',borderRadius:12,boxShadow:'0 4px 16px #6366f133',fontWeight:800,letterSpacing:1}} onClick={handleStartQuiz}>Join QuizTime Now</button>
      </section>

      <footer className="site-footer modern-footer" style={{marginTop:40,background:'#f8fafc',padding:'24px 0',textAlign:'center',color:'#6366f1',fontWeight:600,letterSpacing:1}}>
        <div>© {new Date().getFullYear()} QuizTime. All rights reserved.</div>
      </footer>
    </main>
  );
}
