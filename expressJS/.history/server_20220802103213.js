const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  //   res.send(res.json());
  res.json(res);
  console.log(req);
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
