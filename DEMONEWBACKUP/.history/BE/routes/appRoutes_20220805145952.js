"use strict";
module.exports = (app) => {
  const Backup = require("../controllers/appController");
  app.route("/infoserver").get(Backup.getAllinfoserver);
  aap
  app.route("/backupday").get(Backup.statusBackupday);
  app.route("/aspbackupday").get(Backup.statusASPBackupday);
  app.route("/a").get(Backup.test);
  app.route("/add").post(Backup.InsertManager);
};
