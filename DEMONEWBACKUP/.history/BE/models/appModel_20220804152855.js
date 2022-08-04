"user strict";
const sql = require("./db.js");

Backup.getAllinfoserver = (result) => {
  connection.query("select * from information", (err, result) => {
    if (err) {
      console.log("error: ");
    } else {
      res.send(result);
    }
    console.log("test" + connection.threadId);
  });
};
