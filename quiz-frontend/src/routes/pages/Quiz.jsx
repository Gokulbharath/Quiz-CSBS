
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../../api";


export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(30);
  const [loading, setLoading] = useState(true);
  const [correctCount, setCorrectCount] = useState(0);
  const navigate = useNavigate();

  // Fetch questions from backend on mount
  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (err) {
        console.error("Failed to fetch questions:", err);
        setQuestions([]);
      }
      setLoading(false);
    }
    fetchQuestions();
  }, []);

  // Timer logic
  const handleNext = useCallback(() => {
    if (!questions.length) return;
    // Check if selected answer is correct
    const q = questions[current];
    let isCorrect = false;
    if (q) {
      // Support both {text, isCorrect} and string for options
      const getOptionText = (opt) => typeof opt === 'string' ? opt : (opt && opt.text ? opt.text : '');
      // DB may store answer as string (text) or index
      if (typeof q.answer === 'number') {
        isCorrect = selected === q.answer;
      } else if (typeof q.answer === 'string') {
        isCorrect = getOptionText(q.options[selected]) === q.answer;
      } else {
        // fallback: check isCorrect property
        isCorrect = q.options[selected] && q.options[selected].isCorrect;
      }
    }
    if (isCorrect) setCorrectCount((c) => c + 1);
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setTime(30);
    } else {
      navigate("/quiz/result", { state: { correct: isCorrect ? correctCount + 1 : correctCount, total: questions.length } });
    }
  }, [current, questions, selected, correctCount, navigate]);

  useEffect(() => {
    if (time === 0) handleNext();
    const timer = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, [time, handleNext]);

  const handleOption = (idx) => setSelected(idx);

  if (loading) return <div className="container fade-in" style={{padding:40}}>Loading questions...</div>;
  if (!questions.length) return <div className="container fade-in" style={{padding:40}}>No questions available.</div>;


  const q = questions[current];
  const getOptionText = (opt) => typeof opt === 'string' ? opt : (opt && opt.text ? opt.text : '');

  return (
    <main style={{ minHeight: '100vh', background: '#18111b', padding: 0, margin: 0, fontFamily: 'Poppins, Inter, Arial, sans-serif' }}>
      {/* Gap with #18111A background color */}
      <div style={{ height: '40px', background: '#18111A' }} />
      <div className="container fade-in" style={{
        maxWidth: 700,
        margin: '0 auto',
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
        <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 600, color: '#334155', fontSize: 16 }}>Question {current + 1} of {questions.length}</div>
        <div style={{ height: 6, background: '#e5eaf2', borderRadius: 8, margin: '8px 0 4px 0', overflow: 'hidden' }}>
          <div style={{ width: `${((current + 1) / questions.length) * 100}%`, height: '100%', background: '#0b84ff', borderRadius: 8, transition: 'width 0.3s' }} />
        </div>
        <div style={{ color: '#38bdf8', fontSize: 14, fontWeight: 500 }}>Time remaining: {String(time).padStart(2, '0')}</div>
      </div>
  <div style={{ fontWeight: 900, fontSize: 24, color: '#fff', marginBottom: 24 }}>{q.question}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {q.options.map((opt, idx) => (
          <label key={idx} style={{
            display: 'flex', alignItems: 'center', background: selected === idx ? '#e0f2fe' : '#fff',
            border: selected === idx ? '2px solid #0b84ff' : '2px solid #e5eaf2',
            borderRadius: 12, padding: '14px 18px', cursor: 'pointer', fontWeight: 500, fontSize: 16, boxShadow: selected === idx ? '0 4px 16px #0b84ff22' : '0 2px 8px #e5eaf244', transition: 'all 0.2s', color: '#18111A'
          }}>
            <input
              type="radio"
              name="option"
              checked={selected === idx}
              onChange={() => handleOption(idx)}
              style={{ accentColor: '#0b84ff', marginRight: 14, width: 18, height: 18 }}
            />
            {getOptionText(opt)}
          </label>
        ))}
      </div>
      <button
        className="btn primary modern-btn"
        style={{
          marginTop: 32,
          float: 'right',
          minWidth: 90,
          fontSize: 18,
          borderRadius: 14,
          background: 'linear-gradient(90deg, #ff4fd8 0%, #a166f4 100%)',
          color: '#fff',
          fontWeight: 800,
          letterSpacing: 1,
          border: 'none',
          boxShadow: '0 2px 12px #a166f488'
        }}
        onClick={handleNext}
        disabled={selected === null}
      >
        {current === questions.length - 1 ? 'Finish' : 'Next'}
      </button>
      </div>
    </main>
  );
}
