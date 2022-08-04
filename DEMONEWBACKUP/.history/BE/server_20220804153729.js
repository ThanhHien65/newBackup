const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
port = process.env.PORT || 3000;
app.listen(port);
app.use(cors());

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
