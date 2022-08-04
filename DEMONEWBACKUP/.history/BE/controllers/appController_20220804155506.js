"use strict";
const Backup = require("../models/appModel.js");
exports.getAllinfoserver = (req, res) => {
  Backup.getAllinfoserver((err, result) => {
    console.log("showSuccess");
    if (err) res.send(err);
    res.send(result);
  });
};
exports.statusBackupday =(req,res) =>{
    Backup.statusBackupday((err,resul))
}