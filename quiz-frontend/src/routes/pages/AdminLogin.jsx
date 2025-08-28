import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const nav = useNavigate();
  const [error, setError] = useState("");
  const [adminCode, setAdminCode] = useState("");

  useEffect(() => {
    document.body.style.background = "#18111b";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  function handleAdminLogin(e) {
    e.preventDefault();
    if (adminCode !== "admin123") {
      setError("Invalid admin code.");
      return;
    }
    nav("/admin");
  }

  return (
    <main
      style={{
        background: "#18111b",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
        fontFamily: "Poppins, Inter, Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section
        style={{
          maxWidth: 400,
          width: "100%",
          borderRadius: 18,
          background:
            "radial-gradient(ellipse at 60% 40%, #e6e6b6 0%, #18111b 100%)",
          boxShadow: "0 8px 40px #000a",
          padding: "40px 32px",
          textAlign: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <img
            src="/vite.svg"
            alt="logo"
            style={{ height: 48, marginBottom: 12 }}
          />
          <h2
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: 28,
              color: "#fff",
            }}
          >
            Admin Login
          </h2>
          <p
            style={{
              marginTop: 8,
              marginBottom: 0,
              color: "#fff",
              opacity: 0.85,
            }}
          >
            Enter admin code to access dashboard
          </p>
        </div>

        <form
          onSubmit={handleAdminLogin}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <input
            type="password"
            placeholder="Enter admin code"
            value={adminCode}
            onChange={(e) => setAdminCode(e.target.value)}
            style={{
              background: "#22223b",
              border: "1px solid #2a1a2e",
              borderRadius: 10,
              padding: "14px",
              fontSize: 16,
              color: "#fff",
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: 8,
              background: "linear-gradient(90deg,#ff4ecd,#a259c6)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 18,
              border: "none",
              borderRadius: 10,
              padding: "12px 0",
              boxShadow: "0 2px 8px #a259c633",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        {error && (
          <div style={{ color: "#f43f5e", marginTop: 12, fontWeight: 500 }}>
            {error}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 18 }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#7daaff",
              fontWeight: 500,
              cursor: "pointer",
            }}
            onClick={() => nav("/login")}
          >
            Back to User Login
          </button>
        </div>
      </section>
    </main>
  );
}
