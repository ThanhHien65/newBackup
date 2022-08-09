"use strict";
module.exports = (app) => {
  const Backup = require("../controllers/appController");
  app.route("/backupday").get(Backup.statusBackupday);
  app.route("/aspbackupday").get(Backup.statusASPBackupday);
  app.route("/")
};
