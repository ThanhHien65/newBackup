const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.json(res.);
  //   res.json({ id: "1" });
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
