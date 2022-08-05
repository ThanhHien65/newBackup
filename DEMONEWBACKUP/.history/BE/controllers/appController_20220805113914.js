"use strict";
const Backup = require("../models/appModel.js");
exports.getAllinfoserver = (req, res) => {
  Backup.getAllinfoserver((result) => {
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
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.test = (req, res) => {
  Backup.getManager((err, result) => {
    console.log("Show A Manager");
    console.log(req.body.manager);
    console.log(result);
    res.send(err);
  });
};
