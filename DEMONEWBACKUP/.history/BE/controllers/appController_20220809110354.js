"use strict";
const Backup = require("../models/appModel.js");
const parseIp = (req) => {
  var ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  ip = ip.split(",")[0];
  ip = ip.split(":").slice(-1);
  return `IPCalled : ${ip[0]}`;
};
exports.getAllinfoserver = (req, res) => {
  Backup.getAllinfoserver((result, err) => {
    console.log(parseIp(req));
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.statusBackupday = (req, res) => {
  Backup.statusBackupday((result, err) => {
    console.log(parseIp(req));
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.statusASPBackupday = (req, res) => {
  Backup.statusASPBackupday((result, err) => {
    console.log(parseIp(req));
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.changStatus = (req, res) => {
  Backup.changStatus(req.body.id(result, err) => {
    console.log(parseIp(req));
    result != undefined ? res.send(result) : res.send(err);
  });
};
