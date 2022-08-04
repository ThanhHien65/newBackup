const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
port = process.env.PORT || 5000;
app.listen(port);
app.use(cors());
console.log("API server started on: " + port);

