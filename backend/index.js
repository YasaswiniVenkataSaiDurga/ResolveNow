const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // For environment variables

// MongoDB connection
require("./config");

// Import route files
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const complaintRoutes = require("./routes/complaints");
const messageRoutes = require("./routes/messages");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/messages", messageRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("ResolveNow Backend is Running ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(✅ Server started on http://localhost:${PORT});
});