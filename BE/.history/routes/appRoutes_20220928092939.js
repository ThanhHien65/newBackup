"use strict";
module.exports = (app) => {
  const Backup = require("../controllers/appController");
  // app.route("/backupday").get(Backup.statusBackupday);
  // app.route("/aspbackupday").get(Backup.statusASPBackupday);
  app.route("/checked").put(Backup.changStatusdetail);
  app.route("/reg").post(Backup.registerAccount);
  app.route("/log").post(Backup.LoginAccount);
  app.route("/token").get(Backup.GetAccount);
  app.route("/img").get(Backup.AllListimage);
};
