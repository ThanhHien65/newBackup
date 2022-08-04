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
const OpenSession = connection.connect((err) => {
  if (err) {
    console.log("error connection : " + err.stack);
  }
  console.log("connected as id " + connection.threadId);
});
app.get("/", (req, res) => {
  connection.end(() => console.log(connection.threadId));
  res.json({ id: "disconnected" });
});
app.get("/t", (req, res) => {
  OpenSession;
  res.json({ id: "connected" });
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
