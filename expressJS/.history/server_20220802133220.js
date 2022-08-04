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
  const call = require("./call.js");
  console.log("success", connection.threadId);
  res.send(call.b);
});

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
