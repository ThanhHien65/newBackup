const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const mysql = require("./call.js");
  res.send(`test ${call.add(1, 2)}`);
});

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
