import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./AdminRegister.css"; // Import styles

export default function AdminRegister() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/admin/register", {
        ...formData,
        token,
      });
      setMessage(`✅ ${res.data.message}`);
      setTimeout(() => navigate("/adminlogin"), 2000);
    } catch (err) {
      console.error(err);
      setMessage(`❌ ${err.response?.data?.error || "Registration failed"}`);
    }
  };

  useEffect(() => {
    if (!token) setMessage("❌ Invalid or missing invite token");
  }, [token]);

  return (
    <div className="admin-register-page">
      <div className="admin-register-card">
        <h2 className="admin-register-title">Admin Registration</h2>
        {message && (
          <p
            className={`admin-register-message ${
              message.startsWith("✅") ? "success" : "error"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="admin-register-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
            className="admin-register-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
            className="admin-register-input"
          />
          <button type="submit" className="admin-register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
