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
  return (
    <div className="sideBarmenu">
      <ul>
        <li onClick={ChangeColor}>
          <Link
            to="/"
            className="backup"
            style={{
              backgroundColor:
                document.URL.split("/").pop() == "" ? "#CCCC" : "",
            }}
          >
            <VscServer
              style={{ fontSize: "3rem", paddingRight: "1rem" }}
            ></VscServer>
            Backup overview
          </Link>
        </li>
        <li onClick={ChangeColor}>
          <Link
            to="/monitor"
          className="monitor"
            style={{
              backgroundColor:
                document.URL.split("/").pop() == "monitor" ? "#CCCC" : "",
            }}
          >
            <VscPreview
              style={{ fontSize: "3rem", paddingRight: "1rem" }}
            ></VscPreview>
            monitor
          </Link>
        </li>
        <li onClick={ChangeColor}>
          <Link to="/traffic" 
          style={{
              backgroundColor:
                document.URL.split("/").pop() == "traffic" ? "#CCCC" : "",
            }}>
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
