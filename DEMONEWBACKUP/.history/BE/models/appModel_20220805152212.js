"use strict";
const e = require("cors");
const sql = require("./db.js");
const Backup = (backup) => {
  console.log(Backup);
};
Backup.getAllinfoserver = (result) => {
  sql.query("select * from information", (err, res) => {
    if (err) {
      console.log("error: " + err);
      result(res);
    } else {
      result(res);
    }
  });
};
Backup.statusBackupday = (result) => {
  sql.query(
    ``,
    (err, res) => {
      if (err) {
        console.log("error: " + err);
        result(res);
      } else {
        result(res);
      }
    }
  );
};
Backup.statusASPBackupday = (result) => {
  sql.query(
    "select * from usageasp u JOIN (SELECT ipaddress,MAX(id) as mid from usageasp where date(date)=CURRENT_DATE GROUP BY ipaddress) u1 ON u1.mid=u.id;",
    (err, res) => {
      if (err) {
        console.log("error: " + err);
        result(res);
      } else {
        result(res);
      }
    }
  );
};
Backup.getAmanager = (manager, result) => {
  sql.query(
    `select * from information where manager = ?`,manager,
    (err, res) => {
      if (err) {
        console.log("error: " + err);
        result(res);
      } else {
        result(res);
      }
    }
  );
};
Backup.InsertManager = (manager, result) => {
  sql.query("INSERT INTO `information` set ?", manager, (err, res) => {
    if (err) {
      result(err);
    } else {
      result(res);
    }
  });
};
module.exports = Backup;
