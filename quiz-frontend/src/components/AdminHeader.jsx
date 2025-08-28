import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo12.png";

export default function AdminHeader({ onSectionChange, section }) {
  const navigate = useNavigate();

  return (
    <header
      style={{
        width: "100%",
        background: "#18111A",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 36px",
        boxSizing: "border-box",
        boxShadow: "0 2px 12px #0002",
        minHeight: 60,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src={logo} alt="QuizUp Admin" style={{ height: 36 }} />
        <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>
          QuizUp Admin
        </span>
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <button
          onClick={() => onSectionChange("questions")}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontWeight: section === "questions" ? 700 : 400,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Questions
        </button>
        <button
          onClick={() => onSectionChange("new")}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontWeight: section === "new" ? 700 : 400,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          New Question
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            navigate("/");
          }}
          style={{
            borderRadius: 10,
            background: "linear-gradient(90deg, #ff4fd8 0%, #a166f4 100%)",
            color: "#fff",
            fontWeight: 700,
            border: "none",
            boxShadow: "0 2px 12px #a166f488",
            padding: "8px 24px",
            fontSize: 17,
            marginLeft: 16,
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
