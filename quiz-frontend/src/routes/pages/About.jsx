import React from "react";

export default function About() {
  return (
    <main style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', minHeight: '100vh', padding: 0, margin: 0}}>
      {/* Hero Section */}
      <section style={{
        marginTop: '1cm',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 0 24px 0',
        background: 'linear-gradient(120deg, #a18cd1 0%, #fbc2eb 100%)',
        color: '#fff',
        borderRadius: 60,
        boxShadow: '0 4px 32px rgba(251,194,235,0.18)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 260,
        maxWidth: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
      }}>
        <h1 style={{fontWeight:900, fontSize:40, marginBottom:12, color:'#a259c6', letterSpacing:'-1px', textShadow:'0 2px 8px #fbc2eb55'}}>About <span style={{color:'#f67280'}}>QuizTime</span></h1>
        <p style={{fontSize:20, color:'#fff', marginBottom:18, fontWeight:500, textShadow:'0 1px 4px #fbc2eb55', maxWidth:700, margin:'0 auto'}}>QuizTime is on a mission to make learning fun, engaging, and accessible for everyone. We believe that knowledge grows when shared and celebrated.</p>
      </section>

      {/* Mission Section */}
      <section style={{margin:'48px auto 0 auto',maxWidth:900,background:'#fff',borderRadius:32,boxShadow:'0 4px 24px #a18cd133',padding:'32px 28px',textAlign:'center'}}>
        <h2 style={{color:'#a259c6',fontWeight:800,fontSize:28,marginBottom:10}}>Our Mission</h2>
        <p style={{fontSize:18,color:'#444'}}>To empower learners of all ages to challenge themselves, connect with others, and celebrate their achievements through interactive quizzes and real-time competition.</p>
      </section>

      {/* Values Section */}
      <section style={{margin:'32px auto 0 auto',maxWidth:900,background:'#fff',borderRadius:32,boxShadow:'0 4px 24px #fbc2eb33',padding:'32px 28px',textAlign:'center'}}>
        <h2 style={{color:'#f67280',fontWeight:800,fontSize:28,marginBottom:10}}>Our Values</h2>
        <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexWrap:'wrap',justifyContent:'center',gap:24,fontSize:17}}>
          <li>🌟 <b>Inclusivity:</b> Everyone is welcome to play and learn.</li>
          <li>🚀 <b>Innovation:</b> We use technology to create a dynamic, modern quiz experience.</li>
          <li>🤝 <b>Community:</b> Learning is better together. Compete, collaborate, and grow.</li>
          <li>🏆 <b>Celebration:</b> Every achievement matters, big or small.</li>
        </ul>
      </section>

      {/* Team Section */}
      <section style={{margin:'32px auto 0 auto',maxWidth:900,background:'#fff',borderRadius:32,boxShadow:'0 4px 24px #a18cd133',padding:'32px 28px',textAlign:'center'}}>
        <h2 style={{color:'#a259c6',fontWeight:800,fontSize:28,marginBottom:10}}>Meet the Team</h2>
        <div style={{display:'flex',justifyContent:'center',gap:32,flexWrap:'wrap'}}>
          <div style={{background:'#fbc2eb',borderRadius:24,padding:20,boxShadow:'0 2px 8px #fbc2eb33',minWidth:180}}>
            <img src="/avatar1.png" alt="Team Member" style={{height:70,borderRadius:16,marginBottom:8}} />
            <div style={{fontWeight:700,color:'#a259c6'}}>Amit Sharma</div>
            <div style={{fontWeight:500,color:'#fff'}}>Founder & Product Lead</div>
          </div>
          <div style={{background:'#a18cd1',borderRadius:24,padding:20,boxShadow:'0 2px 8px #a18cd133',minWidth:180}}>
            <img src="/avatar2.png" alt="Team Member" style={{height:70,borderRadius:16,marginBottom:8}} />
            <div style={{fontWeight:700,color:'#fff'}}>Priya Verma</div>
            <div style={{fontWeight:500,color:'#fbc2eb'}}>UI/UX Designer</div>
          </div>
          <div style={{background:'#f67280',borderRadius:24,padding:20,boxShadow:'0 2px 8px #f6728033',minWidth:180}}>
            <img src="/avatar3.png" alt="Team Member" style={{height:70,borderRadius:16,marginBottom:8}} />
            <div style={{fontWeight:700,color:'#fff'}}>Rahul Mehta</div>
            <div style={{fontWeight:500,color:'#fbc2eb'}}>Full Stack Developer</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{textAlign:'center',marginTop:40}}>
        <h2 style={{fontWeight:900,fontSize:28,color:'#a259c6',marginBottom:8}}>Join Our Community</h2>
        <p style={{fontSize:18,color:'#f67280'}}>Ready to test your knowledge and have fun? <a href="/" style={{color:'#a18cd1',textDecoration:'underline'}}>Start your first quiz now!</a></p>
      </section>
    </main>
  );
}
