import React from "react";
import { Link } from "react-router-dom";
import { VscServer, VscPreview, VscRadioTower } from "react-icons/vsc";
const Header = () => {
  const ChangeColor = (e) => {
    // const item = document.querySelectorAll("li");
    // item.forEach((item) => {
    //   item.style.backgroundColor = "";
    // });
    e.target.style.backgroundColor = "#CCCC";
    console.log(e.target);
  };
  return (
    <div className="sideBarmenu">
      <ul>
        <li on>
          <Link to="/">
            <VscServer
              style={{ fontSize: "3rem", paddingRight: "1rem" }}
            ></VscServer>
            Backup overview
          </Link>
        </li>
        <li>
          <Link to="/monitor">
            {" "}
            <VscPreview
              style={{ fontSize: "3rem", paddingRight: "1rem" }}
            ></VscPreview>
            monitor
          </Link>
        </li>
        <li>
          <Link to="/traffic">
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
