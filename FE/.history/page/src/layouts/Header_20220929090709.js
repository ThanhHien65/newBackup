import React from "react";
import { Link } from "react-router-dom";
import { VscServer, VscPreview, VscRadioTower } from "react-icons/vsc";
const Header = () => {
  const ChangeColor = (e) => {
    const item = document.querySelectorAll("a");
    item.forEach((item) => {
      item.style.backgroundColor = "";
    });
    // console.log(e.target);
    const findURL = document.URL.split("/").pop();
    if (findURL == "monitor") {
      e.target.style.backgroundColor = "#CCCC";
    } else if (findURL === "traffic") {
      e.target.style.backgroundColor = "#CCCC";
    } else {
      e.target.style.backgroundColor = "#CCCC";
    }
    // console.log(findURL);
  };
  window.onload = () => {
    const backup = document.getElementsByClassName("backup")[0];
    const monitor = document.getElementsByClassName("monitor")[0];
    const traffic = document.getElementsByClassName("traffic")[0];
    const findURL = document.URL.split("/").pop();
    if (findURL == "monitor") {
      monitor.target.style.backgroundColor = "#CCCC";
    } else if (findURL === "traffic") {
      e.target.style.backgroundColor = "#CCCC";
    } else {
      e.target.style.backgroundColor = "#CCCC";
    // }
    console.log(item);
  };
  return (
    <div className="sideBarmenu">
      <ul>
        <li onClick={ChangeColor}>
          <Link to="/" className="backup">
            <VscServer
              style={{ fontSize: "3rem", paddingRight: "1rem" }}
            ></VscServer>
            Backup overview
          </Link>
        </li>
        <li onClick={ChangeColor}>
          <Link to="/monitor" className="monitor">
            <VscPreview
              style={{ fontSize: "3rem", paddingRight: "1rem" }}
            ></VscPreview>
            monitor
          </Link>
        </li>
        <li onClick={ChangeColor}>
          <Link to="/traffic" className="traffic">
            <VscRadioTower
              style={{ fontSize: "3rem", paddingRight: "1rem" }}
            ></VscRadioTower>
            traffic
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
