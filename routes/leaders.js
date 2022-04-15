const express = require("express");
const router = express.Router();

leaders = ["Ami", "Tui", "Adrita"];

router.get("/", (req, res) => {
  res.send(leaders);
});

router.get("/:leaders_no", (req, res) => {
  const index = req.params.leaders_no;
  res.send(leaders[index]);
});

router.post("/", (req, res) => {
  leaders.push(req.body.name);
  res.send("Adding new leaders : " + req.body.name);
});

router.delete("/", (req, res) => {
  leaders = [];
  res.send("Deleting All Leaders.");
});

router.delete("/:leaders_no", (req, res) => {
  const index = req.params.leaders_no;
  leaders.splice(index, 1);
  res.send("Deleting leaders index : " + index);
});

router.put("/:leaders_no", (req, res) => {
  const index = req.params.leaders_no;
  const new_leader = req.body.name;
  leaders[index] = new_leader;
  res.send("Updated with new leader " + leaders[index]);
});

module.exports = router;
