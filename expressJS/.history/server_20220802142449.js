const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const sql = require("./call.js");
  sql.query("select * from information", (err, result) => {
    if (err) {
      console.log("error: ");
    } else {
      res.send(result);
    }
    console.log("test" + sql.threadId);
  });
});
app.post("/o", (req, res) => {
  const sql = require("./call.js");
//   sql.query(
//     "select * from information where manager='hienm'",
//     (err, result) => {
//       if (err) {
//         console.log("error: ");
//       } else {
//         res.send(result);
//       }
//       console.log("test" + sql.threadId);
//     }
//   );
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
