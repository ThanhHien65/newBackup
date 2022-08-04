import React from "react";
import { Link } from "react-router-dom";
import { VscServer, VscPreview, VscRadioTower } from "react-icons/vsc";
const Header = () => {
  const ChangeColor = (e) => {
    const item = document.querySelectorAll("a");
    item.forEach((item) => {
      item.style.backgroundColor = "";
    });
    e.target.style.backgroundColor = "#CCCC";
    console.log(e.target);
  };
  return (
    <div className="sideBarmenu">
      <ul onClick={ChangeColor}>
        <li>
          <VscServer
            style={{ fontSize: "3rem", paddingRight: "1rem" }}
          ></VscServer>
          <Link to="/">Backup overview</Link>
        </li>
        <li>
          <VscPreview
            style={{ fontSize: "3rem", paddingRight: "1rem" }}
          ></VscPreview>
          <Link to="/monitor">monitor</Link>
        </li>
        <li>
          <VscRadioTower
            style={{ fontSize: "3rem", paddingRight: "1rem" }}
          ></VscRadioTower>
          <Link to="/traffic">traffic</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
