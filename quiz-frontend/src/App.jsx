import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./routes/pages/Landing";
import Login from "./routes/pages/Login";
import QuizStart from "./routes/pages/QuizStart";
import Quiz from "./routes/pages/Quiz";
import Result from "./routes/pages/Result";
import Leaderboard from "./routes/pages/Leaderboard";
import About from "./routes/pages/About";
import Contact from "./routes/pages/Contact";
import AdminLogin from "./routes/pages/AdminLogin";
import AdminDashboard from "./routes/pages/AdminDashboard";
import Register from "./routes/pages/Register";
import { useLocation } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Header from "./components/Header";

export default function App() {
  const location = useLocation();
  const hideHeader = ["/login", "/admin-login", "/register", "/admin"].includes(location.pathname);
  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/quiz/start"
          element={
            <ProtectedRoute>
              <QuizStart />
            </ProtectedRoute>
          }
        />
        <Route path="/quiz" element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        } />
        <Route path="/quiz/result" element={<Result />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* other routes we will add later (quiz, results, admin) */}
      </Routes>
    </>
  );
}
