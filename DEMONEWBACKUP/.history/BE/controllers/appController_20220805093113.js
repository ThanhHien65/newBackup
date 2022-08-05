"use strict";
const Backup = require("../models/appModel.js");
exports.getAllinfoserver = (req, res) => {
  Backup.getAllinfoserver((err, result) => {
    console.log("showInfo");
    err === undefined ? res.send(err) : res.send(result);
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
  Backup.statusASPBackupday((result) => {
    console.log("showASPBackupDay");
    // if (err) res.send(err);
  });
};
