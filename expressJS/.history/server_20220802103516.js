const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  //   res.send(res.json());
  //   res.json(req);
  res.sed({id})
  return res.json();
  //   console.log(res.json());
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
