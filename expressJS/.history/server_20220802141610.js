const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const sql = require("./call.js");
  sql.query("select * from information", (err, result) => {
    if (err) {
      console.log("error: ", result);
    } else {
      console.log("infor : ", res);
      result(null, res);
    }
  });
  res.send(`test ${sql.threadId}`);
});

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
