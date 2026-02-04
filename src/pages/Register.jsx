import React, { useState } from "react";
import axios from "axios";

function Register({setShowRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Simple validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      username: name,
      email: email,
      phoneNumber: phone,
      password: password,
    };

    axios
      .post("http://192.168.134.12:8080/user/register", userData)
      .then((response) => {
        console.log("Registration Success:", response.data);
        alert("Registered Successfully!");
        setShowRegister(false);
      })
      .catch((error) => {
        console.error("Registration Error:", error);
        alert("Registration Failed!");
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
          width: "400px",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <h2>Smart Complaint System</h2>
        <p style={{ marginBottom: "20px", color: "gray" }}>Register</p>

        {/* Name */}
        <div style={{ textAlign: "left", marginBottom: "12px" }}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        {/* Email */}
        <div style={{ textAlign: "left", marginBottom: "12px" }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

       {/* Phone */}
<div style={{ textAlign: "left", marginBottom: "12px" }}>
  <label>Phone</label>
  <input
    type="text"
    placeholder="Enter phone number"
    value={phone}
    onChange={(e) => {
      const value = e.target.value;

      // Allow only numbers and max 10 digits
      if (/^\d{0,10}$/.test(value)) {
        setPhone(value);
      }
    }}
    style={{ width: "100%", padding: "10px" }}
  />
</div>


        {/* Password */}
        <div style={{ textAlign: "left", marginBottom: "12px" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        {/* Confirm Password */}
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
            
          Register
        </button>

        {/* Register Button */}
        <button
           onClick={() => setShowRegister(false)}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        > 
        back to login</button>
      </div>
    </div>
  );
}

export default Register;
