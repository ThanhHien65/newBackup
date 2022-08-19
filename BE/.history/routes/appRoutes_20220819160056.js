"use strict";
module.exports = (app) => {
  const Backup = require("../controllers/appController");
  app.route("/backupday").get(Backup.statusBackupday);
  app.route("/aspbackupday").get(Backup.statusASPBackupday);
  app.route("/checked").put(Backup.changStatusdetail);
  app.route("/reg").post(Account.registerAccount);
  app.route("/log").post(Account.LoginAccount);
  app.route("/token").get(Account.GetAccount);

};
|