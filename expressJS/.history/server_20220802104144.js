const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.json(res.status());
  //   res.json({ id: "1" });
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
