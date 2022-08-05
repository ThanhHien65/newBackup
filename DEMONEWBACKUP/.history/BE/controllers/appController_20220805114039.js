"use strict";
const Backup = require("../models/appModel.js");
exports.getAllinfoserver = (req, res) => {
  Backup.getAllinfoserver((result, err) => {
    console.log("showInfo");
    console.log(result);
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.statusBackupday = (req, res) => {
  Backup.statusBackupday((result, err) => {
    console.log("showBackupDay");
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.statusASPBackupday = (req, res) => {
  Backup.statusASPBackupday((result, err) => {
    console.log("showASPBackupDay");
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.test = (req, res) => {
  Backup.getManager((result, err) => {
    console.log("Show A Manager");
    console.log(req.body.manager);
    console.log(result);
    res.send(err);
  });
};
