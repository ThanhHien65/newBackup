import React from "react";
import { Link } from "react-router-dom";
import { VscServer, VscPreview, VscRadioTower } from "react-icons/vsc";
const Header = () => {
  return (
    <div className="sideBarmenu">
      <ul>
        <li >
          <Link
            to="/"
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
        <li onClick={ChangeColor>
          <Link
            to="/monitor"
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
          <Link
            to="/traffic"
            style={{
              backgroundColor:
                document.URL.split("/").pop() == "traffic" ? "#CCCC" : "",
            }}
          >
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
