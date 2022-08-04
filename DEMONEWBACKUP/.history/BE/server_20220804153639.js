const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;
app.use(cors());
// app.get("/infoserver", (req, res) => {
//   connection.query("select * from information", (err, result) => {
//     if (err) {
//       console.log("error: ");
//     } else {
//       res.send(result);
//     }
//     console.log("test" + connection.threadId);
//   });
// });
// app.get("/backupday", (req, res) => {
//   connection.query(
//     (err, result) => {
//       if (err) {
//         console.log("error: ", err);
//       } else {
//         res.send(result);
//       }
//       console.log("success + ", connection.threadId);
//     }
//   );
// });
// app.get("/aspbackupday", (req, res) => {
//   connection.query(
//     "select * from usageasp u JOIN (SELECT ipaddress,MAX(id) as mid from usageasp where date(date)=CURRENT_DATE GROUP BY ipaddress) u1 ON u1.mid=u.id;",
//     (err, result) => {
//       if (err) {
//         console.log("error: ", err);
//       } else {
//         res.send(result);
//       }
//       console.log("success + ", connection.threadId);
//     }
//   );
// });

app.listen(port, () => {
  console.log(`listen port ${port}`);
});
