
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import ComplaintForm from "./components/ComplaintForm";
import ComplaintList from "./components/ComplaintList";
import MessageBox from "./components/MessageBox";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit" element={<ComplaintForm />} />
        <Route path="/complaints" element={<ComplaintList />} />
        <Route path="/messages/:id" element={<MessageBox />} />
      </Routes>
    </Router>
  );
}

export default App;
