
import React, { useState } from "react";
import api from "../services/api";

function ComplaintForm() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [form, setForm] = useState({ name: "", description: "", address: "", city: "", state: "", pincode: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/complaints/" + user._id, { ...form, userId: user._id });
    alert("Complaint submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Complaint</h2>
      {Object.keys(form).map(k => (
        <input key={k} placeholder={k} onChange={e => setForm({ ...form, [k]: e.target.value })} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ComplaintForm;
