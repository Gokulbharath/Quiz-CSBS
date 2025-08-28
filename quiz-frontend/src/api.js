// Leaderboard API
export async function getLeaderboard() {
  const res = await fetch(`${API_BASE}/leaderboard`);
  return res.json();
}

export async function addLeaderboardEntry(entry) {
  const res = await fetch(`${API_BASE}/leaderboard`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry)
  });
  return res.json();
}
// Quiz API service for frontend <-> backend communication
const API_BASE = 'http://localhost:5000/api'; // Change to your backend URL if deployed

export async function getQuestions() {
  const res = await fetch(`${API_BASE}/questions`);
  return res.json();
}

export async function getRandomQuestion() {
  const res = await fetch(`${API_BASE}/questions/random`);
  return res.json();
}

export async function addQuestion(question) {
  const res = await fetch(`${API_BASE}/questions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(question)
  });
  return res.json();
}

export async function updateQuestion(id, question) {
  const res = await fetch(`${API_BASE}/questions/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(question)
  });
  return res.json();
}

export async function deleteQuestion(id) {
  const res = await fetch(`${API_BASE}/questions/${id}`, {
    method: 'DELETE' });
  return res.json();
}
