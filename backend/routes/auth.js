
const express = require("express");
const router = express.Router();
const { UserSchema } = require("../Schema");

router.post("/signup", async (req, res) => {
  try {
    const user = new UserSchema(req.body);
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Signup failed" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserSchema.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json(user);
});

module.exports = router;
