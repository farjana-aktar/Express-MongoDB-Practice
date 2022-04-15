const express = require("express");
const req = require("express/lib/request");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Farujana's Sweet Home");
});

const dishesRouter = require("./routes/dishes");
app.use("/dishes", dishesRouter);

const leadersRouter = require("./routes/leaders");
app.use("/leaders", leadersRouter);

const promotionsRouter = require("./routes/promotions");
app.use("/promotions", promotionsRouter);

app.listen("3000");
