"use strict";
const Backup = require("../models/appModel.js");
exports.getAllinfoserver = (req, res) => {
  Backup.getAllinfoserver((err, result) => {
    console.log("showInfo");
    if (err) res.send(err);
    res.send(result);
  });
};
exports.statusBackupday = (req, res) => {
  Backup.statusBackupday((err, result) => {
    console.log("showBackupDay");
    if (err) res.send(err);
    res.send(result);
  });
};
exports.statusASPBackupday = (req, res) => {
  Backup.statusASPBackupday((err, result) => {
    console.log("showASPBackup");
    if (err) res.send(err);
    res.send(result);
  });
};
