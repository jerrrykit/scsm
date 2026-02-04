import React, { useState } from "react";
import axios from "axios";

function LoginPage({ setShowRegister,setUserRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const loginData = {
      email: email,
      password: password,
    };

    axios
      .post("http://192.168.134.12:8080/user/login", loginData)
      .then((response) => {
        console.log("Login Success:", response.data);
        alert("Login Successful!");
console.log(response.data);
       const role = response.data.role; 
          const userId = response.data.id;   // <-- IMPORTANT

  // ✅ Store userId in localStorage
  localStorage.setItem("userId", userId);

  if (role === "USER") {
    setUserRole("USER");
  } else if (role === "ADMIN") {
    setUserRole("ADMIN");
  } else if (role === "STAFF") {
    setUserRole("STAFF");
  }

        // Later you can redirect to Dashboard here
        // setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Login Error:", error);
        alert("Invalid Credentials!");
      });
  };

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "380px",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "8px" }}>Smart Complaint System</h2>
        <p style={{ marginBottom: "20px", color: "gray" }}>Login Page</p>

        {/* Email Field */}
        <div style={{ textAlign: "left", marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "6px",
              color: "#374151",
            }}
          >
            Email Address
          </label>

          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "95%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>

        {/* Password Field */}
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "6px",
              color: "#374151",
            }}
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "95%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Login
        </button>

        {/* Register Text */}
        <p style={{ marginTop: "15px", fontSize: "14px", color: "gray" }}>
          Don't have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setShowRegister(true)}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
