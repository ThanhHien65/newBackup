const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "10.0.0.20",
  port: 3307,
  user: "root",
  password: "P@ssw0rd",
  database: "bigbackup",
});

app.get("/", (req, res) => {
  connection.query("select * from information", (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.send(result);
    } else {
      console.log("success", connection.threadId);
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
