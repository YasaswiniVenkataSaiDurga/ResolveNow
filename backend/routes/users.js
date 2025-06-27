
const express = require("express");
const router = express.Router();
const { UserSchema } = require("../Schema");

router.get("/agents", async (req, res) => {
  const users = await UserSchema.find({ userType: "Agent" });
  res.json(users);
});

router.get("/ordinary", async (req, res) => {
  const users = await UserSchema.find({ userType: "Ordinary" });
  res.json(users);
});

router.put("/:id", async (req, res) => {
  const user = await UserSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  const user = await UserSchema.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted", user });
});

module.exports = router;
