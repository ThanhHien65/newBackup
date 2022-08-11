"use strict";
const Backup = require("../models/appModel.js");
const moment = require("moment");
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
    console.log(
      "GET-ALLINFORSERVER",
      parseIp(req),
      moment().format("MM ddd, YYYY hh:mm:ss a")
    );
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.statusBackupday = (req, res) => {
  Backup.statusBackupday((result, err) => {
    console.log(
      "GET-STATUS-BACKUPDAY",
      parseIp(req),
      moment.unix().format("MM ddd, YYYY hh:mm:ss a")
    );
    if (result.code === undefined) {
      res.send(result);
    } else if (result.code === "ECONNREFUSED") {
      res.send({ Error: "Mysql has problem" });
    } else {
      res.send(result);
    }
  });
};
exports.statusASPBackupday = (req, res) => {
  Backup.statusASPBackupday((result, err) => {
    console.log(
      "GET-STATUS-ASPBACKUPDAY",
      parseIp(req),
      moment().format("MM ddd, YYYY hh:mm:ss a")
    );
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.changStatusdetail = (req, res) => {
  console.log(
    "CHECKED",
    parseIp(req),
    moment().format("MM ddd, YYYY hh:mm:ss a")
  );
  Backup.changeStatus(req.body.id, (result) => {
    result.code === undefined
      ? res.send("update success")
      : res.send(result.sqlMessage);
  });
};
