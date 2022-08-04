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
  connection.end(() => console.log(connection.threadId));
  res.json({ id: "disconnected" });
});
app.get("/t", (req, res) => {
  res.json({ id: "connected" });
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
