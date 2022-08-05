"use strict";
module.exports = (app) => {
  const Backup = require("../controllers/appController");
  app.route("/infoserver").get(Backup.getAllinfoserver);
  app.route("/backupday").get(Backup.statusBackupday);
  app.route("/aspbackupday").get(Backup.statusASPBackupday);
  app.route("/infoserver/:manager").get(Backup.getAmanager);
  // app.route("/infoserver/add").get(Backup.InsertManager);
};
