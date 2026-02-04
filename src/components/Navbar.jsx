import React from "react";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#2563eb",
        color: "white",
      }}
    >
      <h3>Smart Complaint System</h3>

      <div>
        <span style={{ marginRight: "15px", cursor: "pointer" }}>Home</span>
        <span style={{ marginRight: "15px", cursor: "pointer" }}>Dashboard</span>
        <span style={{ cursor: "pointer" }}>Login</span>
      </div>
    </div>
  );
}

export default Navbar;
