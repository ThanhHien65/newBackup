"use strict";
module.exports = (app) => {
  const Backup = require("../controllers/appController");
  app.route("/infoserver").get(Backup.getAllinfoserver);
  app.route("/")
};
