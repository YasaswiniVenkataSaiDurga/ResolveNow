
const express = require("express");
const router = express.Router();
const { MessageSchema } = require("../Schema");

router.post("/", async (req, res) => {
  try {
    const message = new MessageSchema(req.body);
    const result = await message.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Message sending failed" });
  }
});

router.get("/:complaintId", async (req, res) => {
  try {
    const messages = await MessageSchema.find({ complaintId: req.params.complaintId }).sort("-createdAt");
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
});

module.exports = router;
