// "user strict";
// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "10.0.0.20",
//   port: 3307,
//   user: "root",
//   password: "P@ssw0rd",
//   database: "bigbackup",
// });
// connection.connect((err) => {
//   if (err) {
//     console.log("error connection : " + err.stack);
//   }
//   console.log("connected as id " + connection.threadId);
// });
// module.exports = connection;
const add = (a,b){
    return a + b
}
module.exports = add