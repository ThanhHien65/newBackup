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
  return `|| ${ip[0]} ||`;
};
exports.getAllinfoserver = (req, res) => {
  Backup.getAllinfoserver((result, err) => {
    console.log(
      parseIp(req),
      `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
      `[GET-ALLINFORSERVER]`
    );
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.statusBackupday = (req, res) => {
  Backup.statusBackupday((result, err) => {
    console.log(
      parseIp(req),
      `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
      "[GET-STATUS-BACKUPDAY]"
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
      parseIp(req),
      `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
      "[GET-STATUS-ASPBACKUPDAY]"
    );
    result != undefined ? res.send(result) : res.send(err);
  });
};
exports.changStatusdetail = (req, res) => {
  Backup.infomationAserver(req.body.id, (result) => {
    console.log(
      parseIp(req),
      `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
      "[PUT-STATUS-CHECKED]",
      `[ID: ${result[0].id}]==[SERVER: ${result[0].hostname}]==[IP:${result[0].ipaddress}]`
    );
  });
  Backup.changeStatus(req.body.id, (result) => {
    result.code === undefined
      ? res.send("update success")
      : res.send(result.sqlMessage);
  });
};
