
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function ComplaintList() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api.get("/complaints/status/" + user._id).then(res => setComplaints(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Complaints</h2>
      <ul>
        {complaints.map(c => (
          <li key={c._id}>
            {c.description} - {c.status}
            <Link to={`/messages/${c._id}`}> Chat </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComplaintList;
