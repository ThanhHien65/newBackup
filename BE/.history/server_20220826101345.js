const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const https = require("https"),
  fs = require("fs");
const options = {
  key: fs.readFileSync("backup.aimtest.tk.key"),
  cert: fs.readFileSync("backup.aimtest.tk.pem"),
};
port = process.env.PORT || 5000;
app.listen(port);
app.use(cors());
console.log("API server started on: " + port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routes = require("./routes/appRoutes.js");
routes(app);
