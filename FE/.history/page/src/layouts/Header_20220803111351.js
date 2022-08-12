import React from "react";
import { Link } from "react-router-dom";
import { VscServer, VscPreview, VscRadioTower } from "react-icons/vsc";
const Header = () => {
  return (
    <div className="sideBarmenu">
      <ul>
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
