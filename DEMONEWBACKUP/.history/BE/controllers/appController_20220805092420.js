"use strict";
const Backup = require("../models/appModel.js");
exports.getAllinfoserver = (req, ress) => {
  Backup.getAllinfoserver((result,) => {
    console.log("showInfo");
    // if (err) res.send(err);
    // if (result) res.send(result);
    // res.send(result);
    ress.send(res);
    console.log(result);
    console.log(res);
  });
};
exports.statusBackupday = (req, res) => {
  Backup.statusBackupday((err, result) => {
    console.log("showBackupDay");
    if (err) res.send(result);
    // res.send(result);
  });
};
exports.statusASPBackupday = (req, res) => {
  Backup.statusASPBackupday((err, result) => {
    console.log("showASPBackupDay");
    // if (err) res.send(err);
  });
};