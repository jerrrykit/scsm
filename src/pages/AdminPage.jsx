import React, { useState } from "react";

function AdminPage() {
  const [staffList, setStaffList] = useState([
    { id: 1, name: "Ravi", email: "ravi@gmail.com", phone: "9876543210" },
    { id: 2, name: "Ankit", email: "ankit@gmail.com", phone: "9123456789" },
  ]);

  const [staffName, setStaffName] = useState("");
  const [staffEmail, setStaffEmail] = useState("");
  const [staffPhone, setStaffPhone] = useState("");

  const handleAddStaff = () => {
    if (!staffName || !staffEmail || !staffPhone) {
      alert("Please fill all fields");
      return;
    }

    const newStaff = {
      id: staffList.length + 1,
      name: staffName,
      email: staffEmail,
      phone: staffPhone,
    };

    setStaffList([...staffList, newStaff]);

    // Clear fields
    setStaffName("");
    setStaffEmail("");
    setStaffPhone("");

    alert("Staff Added Successfully!");
  };

  const handleDeleteStaff = (id) => {
    const updatedList = staffList.filter((staff) => staff.id !== id);
    setStaffList(updatedList);
    alert("Staff Deleted Successfully!");
  };

  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Admin Panel - Manage Staff
      </h2>

      {/* Add Staff Section */}
      <div
        style={{
          width: "60%",
          margin: "0 auto 20px auto",
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Add Staff</h3>

        <input
          type="text"
          placeholder="Staff Name"
          value={staffName}
          onChange={(e) => setStaffName(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          type="email"
          placeholder="Staff Email"
          value={staffEmail}
          onChange={(e) => setStaffEmail(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Staff Phone"
          value={staffPhone}
          onChange={(e) => setStaffPhone(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <button
          onClick={handleAddStaff}
          style={{
            padding: "8px 15px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Staff
        </button>
      </div>

      {/* Staff List Table */}
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Staff List</h3>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid gray", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Email</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Phone</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id}>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {staff.id}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {staff.name}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {staff.email}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {staff.phone}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  <button
                    onClick={() => handleDeleteStaff(staff.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;
