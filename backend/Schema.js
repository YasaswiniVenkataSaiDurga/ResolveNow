const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  userType: { type: String, enum: ["Agent","Ordinary","Admin"], default: "Ordinary" },
});
const complaintSchema = new mongoose.Schema({
  userId: mongoose.ObjectId,
  name: String,
  description: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  purchaseDate: Date,
  attachments: [String],
  status: { type: String, enum: ["Pending","Assigned","Resolved"], default: "Pending" },
}, { timestamps: true });
const messageSchema = new mongoose.Schema({
  name: String, message: String,
  complaintId: mongoose.ObjectId,
}, { timestamps: true });
const assignedSchema = new mongoose.Schema({
  complaintId: mongoose.ObjectId,
  agentId: mongoose.ObjectId,
  status: String,
}, { timestamps: true });

module.exports = {
  UserSchema: mongoose.model("User", userSchema),
  ComplaintSchema: mongoose.model("Complaint", complaintSchema),
  MessageSchema: mongoose.model("Message", messageSchema),
  AssignedComplaint: mongoose.model("AssignedComplaint", assignedSchema),
};