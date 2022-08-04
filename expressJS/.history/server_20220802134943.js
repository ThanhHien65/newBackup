const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const call = require("./call.js");
  call.query("select * from information", (err, res) => {
    if (err) {
      console.log("error: ", err);
    } else {
      console.log("infor : ", res);
      red
    }
  console.log(call.connection);
});

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
