import React, { useEffect, useState } from "react";
import axios from "axios";
const Backup = () => {
  const [backupDay, setBackupDay] = useState([]);
  const [diskASPBackup, setdiskASPBackup] = useState([]);
  useEffect(() => {
    axios
      .get(`http://10.0.0.13:3000/backupday`)
      .then((response) => {
        setBackupDay(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3000/aspbackupday")
      .then((res) => {
        setdiskASPBackup(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const warning = (value) => {
    const spliceValue = value.toString().replace("%", "");
    if (spliceValue > 90) {
      return `color: "red"`;
    }
  };
  return (
    <div className="container_content">
      <div className="content_table">
        <table>
          <tr>
            <th onClick={() => console.log(diskASPBackup)}>#</th>
            <th>hostname</th>
            <th>ipaddress</th>
            <th>BIGDATA</th>
            <th>FILE BACKUP</th>
            <th>MYSQL</th>
            <th>MANAGER</th>
          </tr>
          {backupDay.map((item, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{item.hostname}</td>
                <td>{item.ipaddress}</td>
                <td>{item.status_bigdata}</td>
                <td>{item.status_filebackup}</td>
                <td>{item.status_mysql}</td>
                <td>{item.manager}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="content_table">
        <table>
          <tr>
            <th>#</th>
            <th onClick={() => console.log(diskASPBackup)}>IPADDRESS</th>
            <th>FILESYSTEM</th>
            <th>SIZE</th>
            <th>USED</th>
            <th>AVAIL</th>
            <th>USE%</th>
            <th>MOUNTED ON</th>
          </tr>
          {diskASPBackup.map((item, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{item.ipaddress}</td>
                <td>{item.filesystem}</td>
                <td>{item.size}</td>
                <td>{item.used}</td>
                <td>{item.vaild}</td>
                <td style={{color: warning(item.u)}}>{item.usee}</td>
                <td>{item.mounted}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Backup;
