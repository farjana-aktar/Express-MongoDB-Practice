const express = require("express");
const router = express.Router();

dishes = ["Roshogolla", "Sondesh", "Jilapi"];

router.get("/", (req, res) => {
  res.send(dishes);
});

router.get("/:dishes_no", (req, res) => {
  const index = req.params.dishes_no;
  res.send(dishes[index]);
});

router.post("/", (req, res) => {
  dishes.push(req.body.name);
  res.send("Adding new dishes : " + req.body.name);
});

router.delete("/", (req, res) => {
  dishes = [];
  res.send("Deleting All Items.");
});

router.delete("/:dishes_no", (req, res) => {
  const index = req.params.dishes_no;
  dishes.splice(index, 1);
  res.send("Deleting dishes index : " + index);
});

router.put("/:dishes_no", (req, res) => {
  const index = req.params.dishes_no;
  const new_dish = req.body.name;
  dishes[index] = new_dish;
  res.send("Updated with new dish " + dishes[index]);
});

module.exports = router;
