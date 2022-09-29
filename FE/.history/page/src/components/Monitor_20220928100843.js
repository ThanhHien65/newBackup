import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
const Monitor = () => {
  document.title = "Monitor";
  return (
    <div className="container_content">
      <div
        className="image_monitor"
        style={{
          width: "100%",
          height: "40%",
          padding: "1rem",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <img
          src="http://localhost:5000/img/OffGW_30082022-14:47.png"
          alt=""
          style={{ width: "90%", height: "100%", objectFit: "container" }}
        />
        <img
          src="http://localhost:5000/img/Offmonitor_30082022-14:47.png"
          alt=""
          style={{ width: "90%", height: "100%", objectFit: "conver" }}
        />
      </div>
    </div>
  );
};

export default Monitor;
