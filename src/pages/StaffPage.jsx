import React, { useState, useEffect } from "react";
import axios from "axios";

function StaffPage() {
  const [statusFilter, setStatusFilter] = useState("PENDING"); // <-- match backend
  const [complaints, setComplaints] = useState([]);

  const userId = localStorage.getItem("userId"); // staff id
  console.log("Staff ID:", userId);

  useEffect(() => {
    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }

    axios
      .get(`http://192.168.134.12:8080/complaint/getComplaint/${userId}`)
      .then((response) => {
        console.log("Complaints received:", response.data);
        setComplaints(response.data);
      })
      .catch((error) => {
        console.error("Error fetching complaints:", error);
      });
  }, [userId]);

  const filteredComplaints = complaints.filter(
    (c) => c.status === statusFilter
  );

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Staff Complaint Management
      </h2>

      {/* Filter Buttons */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() => setStatusFilter("PENDING")}
          style={{
            marginRight: "10px",
            padding: "8px 15px",
            backgroundColor: statusFilter === "PENDING" ? "orange" : "white",
            color: statusFilter === "PENDING" ? "white" : "orange",
            border: "1px solid orange",
            cursor: "pointer",
          }}
        >
          Pending
        </button>

        <button
          onClick={() => setStatusFilter("IN_PROGRESS")}
          style={{
            marginRight: "10px",
            padding: "8px 15px",
            backgroundColor:
              statusFilter === "IN_PROGRESS" ? "blue" : "white",
            color: statusFilter === "IN_PROGRESS" ? "white" : "blue",
            border: "1px solid blue",
            cursor: "pointer",
          }}
        >
          In Progress
        </button>

        <button
          onClick={() => setStatusFilter("RESOLVED")}
          style={{
            padding: "8px 15px",
            backgroundColor:
              statusFilter === "RESOLVED" ? "green" : "white",
            color: statusFilter === "RESOLVED" ? "white" : "green",
            border: "1px solid green",
            cursor: "pointer",
          }}
        >
          Resolved
        </button>
      </div>

      {/* Complaint Table */}
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
          {statusFilter} Complaints
        </h3>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid gray", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>
                Category
              </th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>
                Description
              </th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>
                Status
              </th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>
                Date & Time
              </th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>
                Customer ID
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredComplaints.map((c) => (
              <tr key={c.id}>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {c.id}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {c.category}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {c.description}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {c.status}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {c.date ? c.date : "N/A"}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {c.customerId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredComplaints.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            No complaints found for {statusFilter}
          </p>
        )}
      </div>
    </div>
  );
}

export default StaffPage;
