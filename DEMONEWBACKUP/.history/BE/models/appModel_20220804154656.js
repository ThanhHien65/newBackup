"use strict";
const sql = require("./db.js");
const Backup = (backup) =>{
    console.log(B);
}
Backup.getAllinfoserver = (result) => {
  sql.query("select * from information", (err, res) => {
    if (err) {
      console.log("error: ");
      result(null, res);
    } else {
      result(null, res);
    }
  });
};
module.exports = Backup;
