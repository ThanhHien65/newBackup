"use strict";
const Backup = require("../models/appModel.js");
const moment = require("moment");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
    // console.log(
    //   parseIp(req),
    //   `${moment().format("YYYY-MM-ddd HH:mm:ss")} ||`,
    //   "[POST-STATUS-REGISTER]",
    //   `|| [ID: ${result[0].id}] || [SERVER: ${result[0].hostname}] || [IP:${result[0].ipaddress}]`
    // );
  } else {
    Backup.Accountexist(req.body.username, (checkAccount) => {
      if (checkAccount.length) {
        res.status(409).send({
          msg: "This user is already in use!",
        });
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
              { expiresIn: "1s" }
            );
            Backup.LastLogin(checkAccount[0].id);
            res.status(200).send({
              msg: "Logged in!",
              token,
            });
          } else {
            res.status(401).send({
              msg: "password is incorrect!",
            });
          }
        }
      );
    } else {
      res.status(400).send({
        msg: "Username does not exists",
      });
    }
  });
};
exports.GetAccount = (req, res) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer") ||
    !req.headers.authorization.split(" ")[1]
  ) {
    return res.status(422).json({
      message: "Please provide the token",
    });
  }
  const theToken = req.headers.authorization.split(" ")[1];
  // const decoded = jwt.verify(theToken, "the-super-strong-secrect");
  // console.log("get Token success");
  // console.log(now);
  // Backup.getAccount(decoded.id, (result) => {
  //   res.status(200).send({
  //     decoded,
  //   });
  // });

};
