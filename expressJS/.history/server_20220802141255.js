const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const sql = require("./call.js");
  res.send(`test ${}`);
});

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
