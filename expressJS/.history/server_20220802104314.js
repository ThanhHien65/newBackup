const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const connection = mysql.createConnection({
    
})
app.get("/", (req, res) => {
  res.json({ id: "11" });
  //   res.json({ id: "1" });
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
