"use strict";
const sql = require("./db.js");
Backup.getAllinfoserver = (result) => {
  sql.query("select * from information", (err, res) => {
    if (err) {
      console.log("error: ");
    } else {
      result()
    }
  });
};
module.exports = Backup;
