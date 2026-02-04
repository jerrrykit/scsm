import React, { useState } from "react";
import LoginPage from "./components/Auth/LoginPage";
import Register from "./pages/Register";
import CustomerPage from "./pages/CustomerPage";
import StaffPage from "./pages/StaffPage";
import AdminPage from "./pages/AdminPage";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [userRole, setUserRole] = useState(null); // <-- IMPORTANT

  if (userRole === "USER") {
    return <CustomerPage />;
  }
  else if(userRole === "STAFF"){
    return <StaffPage/>;
  }
  else if(userRole === "ADMIN"){
    return <AdminPage/>;
  }

  return (
    <>
      {showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        <LoginPage
          setShowRegister={setShowRegister}
          setUserRole={setUserRole}   
        />
      )}
    </>
  );
}

export default App;
