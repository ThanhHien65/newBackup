"use strict";
const sql = require("./db.js");
const Backup = (backup) => {
  //   console.log(Backup);
};
Backup.getAllinfoserver = (result) => {
  sql.query("select * from information", (err, res) => {
    if (err) {
      console.log("error: ");
      result(null, res);
    } else {
      console.log(Backup);
      result(null, res);
    }
  });
};
module.exports = Backup;
