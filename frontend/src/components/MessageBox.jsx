
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";

function MessageBox() {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/messages/" + id).then(res => setMessages(res.data));
  }, [id]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const res = await api.post("/messages", { name: user.name, message, complaintId: id });
    setMessages([res.data, ...messages]);
    setMessage("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Messages</h2>
      <form onSubmit={sendMessage}>
        <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((m, idx) => (
          <li key={idx}><strong>{m.name}:</strong> {m.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageBox;
