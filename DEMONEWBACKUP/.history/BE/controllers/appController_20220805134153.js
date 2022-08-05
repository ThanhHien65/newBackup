"use strict";
const Backup = require("../models/appModel.js");
const parseIp = (req) => {
  var ip =
  req.headers["x-forwarded-for"] ||
    request.connection.remoteAddress ||
    request.socket.remoteAddress ||
    request.connection.socket.remoteAddress;
  ip = ip.split(",")[0];
  ip = ip.split(":").slice(-1); //in case the ip returned in a format: "::ffff:146.xxx.xxx.xxx"
  return ip;
};
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
  Backup.getManager(req.body.manager, (result, err) => {
    console.log("Show A Manager:", req.body.manager, parseIp(req));
    res.send(result);
  });
};
