const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const sql = require("./call.js");
  sql.query("select * from information", (err, result) => {
    if (err) {
      console.log("error: ", err);
    } else {
      console.log("infor : ", result);
      res.send(result);
    }
    console.log("test");
  });
});

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
