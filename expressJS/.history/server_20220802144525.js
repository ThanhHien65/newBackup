const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "10.0.0.20",
  port: 3307,
  user: "root",
  password: "P@ssw0rd",
  database: "bigbackup",
});
app.get("/", (req, res) => {
  connection.query("select * from information", (err, result) => {
    if (err) {
      console.log("error: ");
    } else {
      res.send(result);
    }
    console.log("test" + connection.threadId);
  });
});
app.get("/day", (req, res) => {
  connection.query(
    `SELECT tols.manager,tols.id,tols.ifno,tols.hostname,tols.ipaddress,b.status_bigdata,f.status_filebackup,m.status_mysql FROM (SELECT tot.ifno,i.hostname,i.ipaddress,i.id,i.manager FROM (SELECT ifno from filebackup where date(date)=CURRENT_DATE UNION SELECT ifno from bigdata where date(date)=CURRENT_DATE UNION SELECT ifno from mysql where date(date)=CURRENT_DATE) tot LEFT JOIN information i ON i.id = tot.ifno) tols LEFT JOIN (SELECT i.id,i.hostname,i.ipaddress,f.status_filebackup FROM (SELECT f.* FROM filebackup f JOIN (SELECT f.ifno, max(f.id) as maxid FROM filebackup f GROUP BY f.ifno) fsum ON fsum.ifno = f.ifno and f.id = fsum.maxid WHERE date(f.date)=CURRENT_DATE ORDER BY f.ifno DESC) f LEFT JOIN information i ON i.id = f.ifno) f ON f.id = tols.ifno LEFT JOIN (SELECT i.id,i.hostname,i.ipaddress,b.status_bigdata FROM (SELECT b.* FROM bigdata b JOIN (SELECT b.ifno, max(b.id) as maxid FROM bigdata b GROUP BY b.ifno) bsum ON bsum.ifno = b.ifno and b.id = bsum.maxid WHERE date(b.date)=CURRENT_DATE ORDER BY b.ifno DESC) b LEFT JOIN information i ON i.id = b.ifno) b ON b.id = tols.ifno LEFT JOIN (SELECT i.id,i.hostname,i.ipaddress,m.status_mysql FROM (SELECT m.* FROM mysql m JOIN (SELECT m.ifno, max(m.id) as maxid FROM mysql m GROUP BY m.ifno) msum ON msum.ifno = m.ifno and m.id = msum.maxid WHERE date(m.date)=CURRENT_DATE ORDER BY m.ifno DESC) m LEFT JOIN information i ON i.id = m.ifno) m ON m.id = tols.ifno ORDER BY tols.manager DESC`,
    (err, result) => {
        if(err){
            console.log("error");
        }
    }
  );
});
app.listen(port, () => {
  console.log(`listen port ${port}`);
});
