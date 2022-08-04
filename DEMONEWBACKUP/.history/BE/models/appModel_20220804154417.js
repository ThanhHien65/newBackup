"use strict";
const sql = require("./db.js");
Backup.getAllinfoserver = (result) => {
  sql.query("select * from information", (err, resulrest) => {
    if (err) {
      console.log("error: ");
    } else {
      res.send(result);
    }
  });
};
module.exports = Backup;
