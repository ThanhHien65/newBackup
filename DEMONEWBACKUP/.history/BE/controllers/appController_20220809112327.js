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
exports.changStatusdetail = (req, res) => {
  Backup.changeStatus(req.body.id, (result, err) => {
    result.code === undefined
      ? res.send("insert success")
      : res.send(result.sqlMessage);
  });
  console.log(parseIp(req));
};
