const express = require("express");

const router = express.Router();

//this to get all workouts
router.get("/", (req, res) => {
  res.json({ message: "HELLO IAM ALL THE ROUTES" });
});

//get

router.get("/:id", (req, res) => {
  res.json({ message: "GET" });
});

//POST

router.post("/", (req, res) => {
  res.json({ message: "POST " });
});

//DELETE

router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE" });
});

//UPDATE
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE" });
});

module.exports = router;
