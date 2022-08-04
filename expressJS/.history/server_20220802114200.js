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
app.get("/", (req, res) => {
  //   connection.end(() => console.log("disconnected as id ", connection.threadId));
  connection.query("select * from information", (err, result) => {
    if (err) {
      console.log("error: ", err);
    } else {
      console.log("infor : ", result);
    }
    res.send(result);
  });
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
