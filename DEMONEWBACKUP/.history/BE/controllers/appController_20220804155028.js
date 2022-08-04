"use strict";
const Backup = require("../models/appModel.js");
exports.getAllinfoserver = (req, res) => {
  Backup.getAllinfoserver((err, result) => {
    console.log("showSuccess");
    if (err) res.send(err);
    console.log(Backup);
    res.send(result);
  });
};
