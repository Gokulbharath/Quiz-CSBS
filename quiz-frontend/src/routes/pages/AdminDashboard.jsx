import React, { useEffect, useState } from "react";
import { getQuestions, addQuestion, updateQuestion, deleteQuestion } from "../../api";
import AdminHeader from "../../components/AdminHeader";

const emptyForm = {
  question: "",
  options: ["", "", "", ""],
  answer: "",
  category: ""
};

export default function AdminDashboard() {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [section, setSection] = useState("questions");

  async function fetchQuestions() {
    setLoading(true);
    try {
      const data = await getQuestions();
      setQuestions(data);
    } catch {
      setError("Failed to load questions");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  function handleFormChange(e, idx) {
    if (e.target.name === "option") {
      const opts = [...form.options];
      opts[idx] = e.target.value;
      setForm({ ...form, options: opts });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }

  function startEdit(q) {
    setSection("new");
    setEditId(q._id);
    setForm({
      question: q.question,
      options: q.options.map(opt => opt.text || opt),
      answer: q.answer,
      category: q.category || ""
    });
  }

  function cancelEdit() {
    setEditId(null);
    setForm(emptyForm);
    setSection("questions");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.question || form.options.some(opt => !opt) || !form.answer) {
      setError("Please fill all fields and options.");
      return;
    }
    const payload = {
      question: form.question,
      options: form.options.map(opt => ({ text: opt, isCorrect: opt === form.answer })),
      answer: form.answer,
      category: form.category
    };
    try {
      if (editId) {
        await updateQuestion(editId, payload);
        cancelEdit();
      } else {
        await addQuestion(payload);
        setForm(emptyForm);
      }
      fetchQuestions();
      setSection("questions");
    } catch {
      setError("Failed to save question");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this question?")) return;
    try {
      await deleteQuestion(id);
      fetchQuestions();
    } catch {
      setError("Failed to delete");
    }
  }

  return (
    <>
      <AdminHeader onSectionChange={setSection} section={section} />
      <div
        className="fade-in"
        style={{
          minHeight: "100vh", // full height
          width: "100%",      // full width
          padding: "40px",
          borderRadius: 0,
          background: "linear-gradient(135deg, #18111A)", // full gradient background
          boxShadow: "none",
          color: "#fff",
          position: "relative",
          overflow: "visible",
        }}
      >
        {section === "questions" && (
          <>
            <h2 style={{ fontWeight: 700, color: "#fff" }}>All Questions</h2>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div style={{ marginTop: 12 }}>
                {questions.length === 0 && (
                  <div style={{ color: "#888" }}>No questions found.</div>
                )}
                {questions.map(q => (
                  <div
                    key={q._id}
                    style={{
                      background: "#231a26",
                      borderRadius: 12,
                      boxShadow: "0 1px 6px #0B3C8911",
                      padding: 18,
                      marginBottom: 16
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 17,
                        marginBottom: 6,
                        color: "#fff"
                      }}
                    >
                      {q.question}
                    </div>
                    <ul style={{ margin: "8px 0 0 16px", padding: 0, color: "#fff" }}>
                      {q.options.map((opt, i) => (
                        <li
                          key={i}
                          style={{
                            color: opt.isCorrect ? "#00BFA6" : "#fff",
                            fontWeight: opt.isCorrect ? 700 : 400
                          }}
                        >
                          {opt.text || opt}
                        </li>
                      ))}
                    </ul>
                    <div style={{ fontSize: 13, color: "#aaa", marginTop: 4 }}>
                      Category: {q.category || "N/A"}
                    </div>
                    <div style={{ marginTop: 8, display: "flex", gap: 10 }}>
                      <button
                        className="btn secondary"
                        style={{
                          padding: "6px 18px",
                          fontSize: 15,
                          borderRadius: 8,
                          background:
                            "linear-gradient(90deg, #ff4fd8 0%, #a166f4 100%)",
                          color: "#fff",
                          fontWeight: 700,
                          border: "none",
                          boxShadow: "0 2px 8px #a166f488"
                        }}
                        onClick={() => startEdit(q)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn accent"
                        style={{
                          padding: "6px 18px",
                          fontSize: 15,
                          borderRadius: 8,
                          background:
                            "linear-gradient(90deg, #ff4fd8 0%, #a166f4 100%)",
                          color: "#fff",
                          fontWeight: 700,
                          border: "none",
                          boxShadow: "0 2px 8px #a166f488"
                        }}
                        onClick={() => handleDelete(q._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        {section === "new" && (
          <form
            onSubmit={handleSubmit}
            style={{
              margin: "32px 0",
              background: "#231a26",
              borderRadius: 12,
              boxShadow: "0 2px 12px #0B3C8922",
              padding: 24,
              color: "#fff"
            }}
          >
            <h3 style={{ marginTop: 0, fontWeight: 600 }}>
              {editId ? "Edit Question" : "Add New Question"}
            </h3>
            <input
              name="question"
              placeholder="Question"
              value={form.question}
              onChange={handleFormChange}
              required
              style={{
                background: "#18111A",
                color: "#fff",
                border: "1px solid #333",
                marginBottom: 8,
                borderRadius: 6,
                padding: 8
              }}
            />
            {form.options.map((opt, idx) => (
              <input
                key={idx}
                name="option"
                placeholder={`Option ${idx + 1}`}
                value={opt}
                onChange={e => handleFormChange(e, idx)}
                required
                style={{
                  background: "#18111A",
                  color: "#fff",
                  border: "1px solid #333",
                  marginBottom: 8,
                  borderRadius: 6,
                  padding: 8
                }}
              />
            ))}
            <input
              name="answer"
              placeholder="Correct Answer (must match one option)"
              value={form.answer}
              onChange={handleFormChange}
              required
              style={{
                background: "#18111A",
                color: "#fff",
                border: "1px solid #333",
                marginBottom: 8,
                borderRadius: 6,
                padding: 8
              }}
            />
            <input
              name="category"
              placeholder="Category (optional)"
              value={form.category}
              onChange={handleFormChange}
              style={{
                background: "#18111A",
                color: "#fff",
                border: "1px solid #333",
                marginBottom: 8,
                borderRadius: 6,
                padding: 8
              }}
            />
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <button
                className="btn primary"
                type="submit"
                style={{
                  borderRadius: 10,
                  background:
                    "linear-gradient(90deg, #ff4fd8 0%, #a166f4 100%)",
                  color: "#fff",
                  fontWeight: 800,
                  letterSpacing: 1,
                  border: "none",
                  boxShadow: "0 2px 12px #a166f488",
                  padding: "10px 24px",
                  fontSize: 16
                }}
              >
                {editId ? "Update" : "Add"}
              </button>
              {editId && (
                <button
                  className="btn secondary"
                  type="button"
                  onClick={cancelEdit}
                  style={{
                    borderRadius: 10,
                    background:
                      "linear-gradient(90deg, #ff4fd8 0%, #a166f4 100%)",
                    color: "#fff",
                    fontWeight: 800,
                    letterSpacing: 1,
                    border: "none",
                    boxShadow: "0 2px 12px #a166f488",
                    padding: "10px 24px",
                    fontSize: 16
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
            {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
          </form>
        )}
        {section === "leaderboard" && (
          <div style={{ marginTop: 32 }}>
            <h2 style={{ fontWeight: 700, color: "#fff" }}>Leaderboard</h2>
            <div style={{ color: "#aaa", marginTop: 12 }}>
              Leaderboard feature coming soon...
            </div>
          </div>
        )}
      </div>
    </>
  );
}
