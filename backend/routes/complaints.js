
const express = require("express");
const router = express.Router();
const { ComplaintSchema, AssignedComplaint, UserSchema } = require("../Schema");

router.post("/:id", async (req, res) => {
  const user = await UserSchema.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  const complaint = new ComplaintSchema(req.body);
  const result = await complaint.save();
  res.status(200).json(result);
});

router.get("/status/:id", async (req, res) => {
  const complaints = await ComplaintSchema.find({ userId: req.params.id });
  res.json(complaints);
});

router.get("/status", async (req, res) => {
  const complaints = await ComplaintSchema.find();
  res.json(complaints);
});

router.put("/:complaintId", async (req, res) => {
  const updatedComplaint = await ComplaintSchema.findByIdAndUpdate(req.params.complaintId, req.body, { new: true });
  const assigned = await AssignedComplaint.findOneAndUpdate(
    { complaintId: req.params.complaintId }, req.body, { new: true }
  );
  res.json(updatedComplaint || assigned);
});

module.exports = router;
