const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const call = require("./call.js");
  res.send(`test ${call.a}`);
  console.log(call.a);
});

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
