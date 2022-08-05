"use strict";
const Backup = require("../models/appModel.js");
exports.getAllinfoserver = (req, res) => {
  Backup.getAllinfoserver((result) => {
    console.log("showInfo");
    if (err) {
      console.log(err);
    }
    // if (result) res.send(result);
    // res.send(result);
    res.send(result);
    // console.log(result);
    // console.log(res);
  });
};
exports.statusBackupday = (req, res) => {
  Backup.statusBackupday((result) => {
    console.log("showBackupDay");
    if (err) res.send(result);
    // res.send(result);
  });
};
exports.statusASPBackupday = (req, res) => {
  Backup.statusASPBackupday(( result) => {
    console.log("showASPBackupDay");
    // if (err) res.send(err);
  });
};
