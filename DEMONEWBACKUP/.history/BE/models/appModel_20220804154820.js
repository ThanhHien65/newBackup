"use strict";
const sql = require("./db.js");
const Backup = (backup) => {
  console.log(Backup);
};
Backup.getAllinfoserver = (result) => {
  sql.query("select * from information", (err, res) => {
    if (err) {
      result(null, res);
    } else {
      result(null, res);
    }
  });
};
module.exports = Backup;
