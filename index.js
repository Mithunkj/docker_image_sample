const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from the mithun");
});

app.get("/well", (req, res) => {
  res.send("hello mithun");
});
app.get("/ready", (req, res) => {
  res.send("Great!, It work!");
});

app.listen(process.env.PORT || 3000,() =>{console.log("listen port 3000")});
