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
const 
app.get("/", (req, res) => {
  console.log("success", connection.threadId);
  res.send("test");
});

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
