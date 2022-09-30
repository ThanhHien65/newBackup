import React, { useEffect, useState } from "react";
import axios from "axios";
import { VscPassFilled } from "react-icons/vsc";
import { CgCloseR } from "react-icons/cg";
import { BackupDaily, ASPBackup } from "./Globaldata";
import { useRecoilValue, useRecoilState } from "recoil";
const Backup = () => {
  document.title = "Backup";
  const DatabackupDay = useRecoilValue(BackupDaily);
  let Freezebackup = DatabackupDay.map((a) => {
    return { ...a };
  });
  const [backupDay, setBackupDay] = useState(Freezebackup);
  const diskASPBackup = useRecoilValue(ASPBackup);
  const [isShow, setShow] = useState(true);
  const [aBackup, setAbackup] = useState([]);
  const confirm = () => {
    const statusInfo = (backup) => {
      return (
        <div>
          {backup.map((item, index) => {
            return (
              <div className="statusinfo">
                <h1 style={{ textTransform: "none" }}>
                  IP / Server : {item.ipaddress} / {item.hostname}
                </h1>
                {item.fvalue == 0 ? (
                  <h1>
                    FILEBACKUP : not Checked <br />
                    {item.status_filebackup.length > 30 ? (
                      <h1
                        style={{
                          fontSize: "1.5rem",
                          textTransform: "capitalize",
                          fontWeight: "normal",
                          color: "red",
                        }}
                      >
                        + {item.status_filebackup}
                      </h1>
                    ) : (
                      ""
                    )}
                  </h1>
                ) : item.fvalue == null ? (
                  ""
                ) : (
                  <h1>
                    FILEBACKUP : Checked
                    <br />
                    {item.status_filebackup.length > 30 ? (
                      <h1
                        style={{
                          fontSize: "1.5rem",
                          textTransform: "capitalize",
                          fontWeight: "normal",
                          color: "black",
                        }}
                      >
                        + {item.status_filebackup}
                      </h1>
                    ) : (
                      ""
                    )}
                  </h1>
                )}
                {item.bvalue == 0 ? (
                  <h1>
                    BIGDATA : not Checked
                    <br />
                    {item.status_filebackup.length > 30 ? (
                      <h1
                        style={{
                          fontSize: "1.5rem",
                          textTransform: "capitalize",
                          fontWeight: "normal",
                          color: "red",
                        }}
                      >
                        + {item.status_filebackup}
                      </h1>
                    ) : (
                      ""
                    )}
                  </h1>
                ) : item.bvalue == null ? (
                  ""
                ) : (
                  <h1>BIGDATA : Checked</h1>
                )}
                {item.mvalue == 0 ? (
                  <h1>
                    MYSQL : not Checked <br />
                    {item.status_mysql.length > 30
                      ? `STATUS : ${item.status_mysql}`
                      : ""}
                  </h1>
                ) : item.mvalue == null ? (
                  ""
                ) : (
                  <h1>MYSQL : Checked</h1>
                )}
              </div>
            );
          })}
        </div>
      );
    };
    const checked = (e) => {
      axios
        .put("https://api.aimtest.tk/checked", {
          id: aBackup[0].id,
        })
        .then(function (response) {
          // console.log(response.data);
        });
      Object.keys(aBackup[0]).forEach((item, index) => {
        if (aBackup[0][item] == 0) {
          aBackup[0][item] = 1;
        }
      });
      setAbackup([...aBackup]);
    };
    return (
      <div
        className="confirmStatus"
        style={
          isShow
            ? {
                opacity: "0",
                transform: "translate(-50%,-300%)",
              }
            : {
                transform: "translate(-50%,-50%)",
                opacity: "1",
                transition: "all 0.5s ease-out",
              }
        }
      >
        <h1 onClick={() => setShow(!isShow)}>
          <CgCloseR style={{ fontSize: "2.5rem" }}></CgCloseR>
        </h1>
        {aBackup.length != 0 ? statusInfo(aBackup) : <h1>Not Found</h1>}
        <div className="statusCheck">
          <div className="checked Buttonstatus" onClick={checked}>
            Checked
          </div>
          <div className="remote Buttonstatus">Connect</div>
        </div>
      </div>
    );
  };
  const showStatus = (e) => {
    setShow(!isShow);
    const saveBackup = backupDay[e.target.className];
    aBackup.length = 0;
    setAbackup([...aBackup, saveBackup]);
  };
  const changeColor = (value) => {
    if (value == 1) {
      return "#46CB18";
    } else {
      return "";
    }
  };
  return (
    <div className="container_content">
      <div className="content_table">
        <table>
          <tr>
            <th>#</th>
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
                <td
                  className={item.status_bigdata === null ? "" : "Buttonstatus"}
                >
                  {item.status_bigdata === null ? (
                    <VscPassFilled style={{ fontSize: "2rem" }}></VscPassFilled>
                  ) : (
                    <h1
                      className={index}
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "normal",
                        color: changeColor(item.bvalue),
                      }}
                      onClick={showStatus}
                    >
                      {item.status_bigdata}
                    </h1>
                  )}
                </td>
                <td
                  className={
                    item.status_filebackup === null ? "" : "Buttonstatus"
                  }
                >
                  {item.status_filebackup === null ? (
                    <VscPassFilled style={{ fontSize: "2rem" }}></VscPassFilled>
                  ) : (
                    <h1
                      className={index}
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "normal",
                        color: changeColor(item.fvalue),
                      }}
                      onClick={showStatus}
                    >
                      {item.status_filebackup}
                    </h1>
                  )}
                </td>
                <td
                  className={item.status_mysql === null ? "" : "Buttonstatus"}
                >
                  {item.status_mysql === null ? (
                    <VscPassFilled style={{ fontSize: "2rem" }}></VscPassFilled>
                  ) : (
                    <h1
                      className={index}
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "normal",
                        color: changeColor(item.mvalue),
                      }}
                      onClick={showStatus}
                    >
                      {item.status_mysql}
                    </h1>
                  )}
                </td>
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
            <th>IPADDRESS</th>
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
                <td
                  style={{
                    color: `${
                      item.usee.toString().replace("%", "") >= 90
                        ? "#DC143C"
                        : ""
                    }`,
                  }}
                >
                  {item.usee}
                </td>
                <td>{item.mounted}</td>
              </tr>
            );
          })}
        </table>
      </div>
      {confirm()}
    </div>
  );
};

export default Backup;
