const express = require("express");
const router = express.Router();

promotions = ["All items have 5% discout"];

router.get("/", (req, res) => {
  res.send(promotions);
});

router.get("/:promotions_no", (req, res) => {
  const index = req.params.promotions_no;
  res.send(promotions[index]);
});

router.post("/", (req, res) => {
  promotions.push(req.body.name);
  res.send("Adding new promotions : " + req.body.name);
});

router.delete("/", (req, res) => {
  promotions = [];
  res.send("Deleting All Promotions.");
});

router.delete("/:promotions_no", (req, res) => {
  const index = req.params.promotions_no;
  promotions.splice(index, 1);
  res.send("Deleting promotions index : " + index);
});

router.put("/:promotions_no", (req, res) => {
  const index = req.params.promotions_no;
  const new_promotion = req.body.name;
  promotions[index] = new_promotion;
  res.send("Updated with new promotion " + promotions[index]);
});

module.exports = router;
