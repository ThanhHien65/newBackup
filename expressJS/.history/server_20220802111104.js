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
connection.connect((err) => {
  if (err) {
    console.log("error connection : " + err.stack);
  }
  console.log("connected as id " + connection.threadId);
});
connection.end();
app.get("/", (req, res) => {
    connection.con
  res.json({ id: "11" });
});
app.get("/t", (req, res) => {
  res.json({ id: "22" });
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
