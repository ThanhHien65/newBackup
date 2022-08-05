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
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.test = (req, res) => {
  const manager = req.body.manager;
  Backup.getManager((err, result, manager) => {
    console.log("Show A Manager");
    console.log(manager);
    console.log(result);
    res.send(result);
  });
};
