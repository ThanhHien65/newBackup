"use strict";
const Backup = require("../models/appModel.js");
exports.getAllinfoserver = (req, res) => {
  Backup.getAllinfoserver((err, result) => {
    console.log("showInfo");
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.statusBackupday = (req, res) => {
  Backup.statusBackupday((err, result) => {
    console.log("showBackupDay");
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.statusASPBackupday = (req, res) => {
  Backup.statusASPBackupday((err, result) => {
    console.log("showASPBackupDay");
    // if (err) res.send(err);
  });
};