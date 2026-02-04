import React, { useState } from "react";
import axios from "axios";

function CustomerPage() {
  const [category, setCategory] = useState("Delay");
  const [complaint, setComplaint] = useState("");

  const handleSubmitComplaint = () => {
    if (!complaint) {
      alert("Please enter your complaint!");
      return;
    }

    const complaintData = {
      category: category,
      description: complaint,
    };
    console.log(complaintData);
    axios
      .post("http://192.168.134.12:8080/complaint/submit", complaintData)
      .then((response) => {
        console.log("Complaint Submitted:", response.data);
        alert("Complaint submitted successfully!");

        // Clear fields after submission (optional)
        setComplaint("");
        setCategory("Delay");
      })
      .catch((error) => {
        console.error("Error submitting complaint:", error);
        alert("Failed to submit complaint!");
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
          width: "450px",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          Customer Complaint Page
        </h2>

        {/* Category Selection */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>
            Select Complaint Category:
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          >
            <option value="Delay">Delivery Issue</option>
            <option value="WrongProduct">Price Issue</option>
            <option value="Damage">Product Issue</option>
          </select>
        </div>

        {/* Complaint Text Box */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>
            Describe your complaint:
          </label>

          <textarea
            placeholder="Write your complaint here..."
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            style={{
              width: "100%",
              height: "120px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmitComplaint}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit Complaint
        </button>
      </div>
    </div>
  );
}

export default CustomerPage;
