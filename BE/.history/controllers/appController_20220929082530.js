"use strict";
const Backup = require("../models/appModel.js");
const moment = require("moment");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
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
      `|| [ID: ${result[0].id}] || [SERVER: ${result[0].hostname}] || [IP:${result[0].ipaddress}]`
    );
  });
  Backup.changeStatus(req.body.id, (result) => {
    result.code === undefined
      ? res.send("update success")
      : res.send(result.sqlMessage);
  });
};
exports.registerAccount = (req, res) => {
  if (
    req.body.username.length === 0 ||
    req.body.username.includes(" ") === true
  ) {
    res.status(400).send({
      msg: "username can't use white space",
    });
    console.log(
      parseIp(req),
      `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
      `[POST-STATUS-REGISTER] || [UserName: ${req.body.username} Password: ${req.body.password}] || [username can't use white space]`
    );
  } else {
    Backup.Accountexist(req.body.username, (checkAccount) => {
      if (checkAccount.length) {
        res.status(409).send({
          msg: "This user is already in use!",
        });
        console.log(
          parseIp(req),
          `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
          `[POST-STATUS-REGISTER] || [UserName: ${req.body.username} Password: ${req.body.password}] || [This user is already in use!]`
        );
      } else {
        if (req.body.password.length != 0) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              res.status(500).send({ msg: "err" });
            } else {
              Backup.CreateAccount(req.body.username, hash, (result) => {
                if (result.code == undefined) {
                  res.status(201).send({
                    msg: "The user has been registerd with us!",
                  });
                  console.log(
                    parseIp(req),
                    `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
                    `[POST-STATUS-REGISTER] || [UserName: ${req.body.username} Password: ${req.body.password}] || [The user has been registerd with us!]`
                  );
                } else {
                  res.status(400).send({
                    msg: result,
                  });
                }
              });
            }
          });
        } else {
          res.status(500).send({ msg: "Password null" });
          console.log(
            parseIp(req),
            `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
            `[POST-STATUS-REGISTER] || [UserName: ${req.body.username} Password: ${req.body.password}] || [Password null]`
          );
        }
      }
    });
  }
};
exports.LoginAccount = (req, res) => {
  Backup.Accountexist(req.body.username, (checkAccount) => {
    if (checkAccount.length) {
      bcrypt.compare(
        req.body.password,
        checkAccount[0].password,
        (berr, bresult) => {
          if (bresult === true) {
            const token = jwt.sign(
              { id: checkAccount[0].id },
              "the-super-strong-secrect",
              { expiresIn: "1h" }
            );
            Backup.LastLogin(checkAccount[0].id);
            Backup.statusBackupday((backupday, err) => {
              Backup.statusASPBackupday((aspbackup, err) => {
                const directoryPath = "/home/hanbiro/OFF";
                fs.readdir(directoryPath, (err, files) => {
                  const baseUrl = "http://localhost:5000/img/";
                  if (err) {
                    console.log("message: Unable to scan files");
                  }
                  let fileInfos = [];
                  files.forEach((file) => {
                    fileInfos.push({
                      name: file,
                      url: baseUrl + file,
                    });
                  });
                });
                res.status(200).send({
                  msg: "Logged in!",
                  token,
                  backupday,
                  aspbackup,
                  fileInfos,
                });
              });
            });
            console.log(
              parseIp(req),
              `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
              `[POST-STATUS-LOGIN] || [UserName: ${req.body.username} Password: ${req.body.password}] || [Logged in!]`
            );
          } else {
            res.status(401).send({
              msg: "password is incorrect!",
            });
            console.log(
              parseIp(req),
              `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
              `[POST-STATUS-LOGIN] || [UserName: ${req.body.username} Password: ${req.body.password}] || [password is incorrect!]`
            );
          }
        }
      );
    } else {
      res.status(400).send({
        msg: "Username does not exists",
      });
      console.log(
        parseIp(req),
        `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
        `[POST-STATUS-LOGIN] || [UserName: ${req.body.username} Password: ${req.body.password}] || [Username does not exists]`
      );
    }
  });
};
exports.GetAccount = (req, res) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer") ||
    !req.headers.authorization.split(" ")[1]
  ) {
    res.status(422).json({
      message: "Please provide the token",
    });
    console.log(
      parseIp(req),
      `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
      `[POST-STATUS-TOKEN] || [TOKEN: ${
        req.headers.authorization.split(" ")[1]
      }] || [Please provide the token]`
    );
  } else {
    const theToken = req.headers.authorization.split(" ")[1];
    jwt.verify(theToken, "the-super-strong-secrect", (err, decoded) => {
      if (err) {
        res.status(400).send(err.message);
        console.log(
          parseIp(req),
          `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
          `[GET-STATUS-TOKEN] || [TOKEN: ${
            req.headers.authorization.split(" ")[1]
          }] || [JWT EXPIRED]`
        );
      } else {
        Backup.statusBackupday((backupday, err) => {
          Backup.statusASPBackupday((aspbackup, err) => {
            res.status(200).send({ backupday, aspbackup });
          });
        });
        console.log(
          parseIp(req),
          `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
          `[GET-STATUS-TOKEN] || [TOKEN: ${
            req.headers.authorization.split(" ")[1]
          }] || [JWT Success]`
        );
      }
    });
  }
};
exports.AllListimage = (req, res) => {
  const directoryPath = "/home/hanbiro/OFF";
  fs.readdir(directoryPath, (err, files) => {
    const baseUrl = "http://localhost:5000/img/";
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });
    res.status(200).send(fileInfos);
    console.log(
      parseIp(req),
      `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
      `[GET-STATUS-ALL*IMAGE]`
    );
  });
};
exports.ImageMonitor = (req, res) => {
  const directoryPath = "/home/hanbiro/OFF/";
  res.status(200).sendFile(directoryPath + req.params.pic);
  console.log(
    parseIp(req),
    `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
    `[GET-STATUS-ALL*IMAGE]`
  );
};
