
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <Link to="/submit">Submit Complaint</Link><br/>
      <Link to="/complaints">My Complaints</Link>
    </div>
  );
}

export default Dashboard;
