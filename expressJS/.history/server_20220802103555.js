const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  //   res.send(res.json());
  res.json({ id: "1" });
  //   res.send({ id: "1" });
  return res.json();
  //   console.log(res.json());
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
