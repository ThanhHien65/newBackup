import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
const Monitor = () => {
  document.title = "Monitor";
  return (
    <div className="container_content">
      <div className="image_monitor" style={{ width: "50%", height: "50%" }}>
        <img
          src="http://localhost:5000/img/OffGW_30082022-14:47.png"
          alt=""
          style={{  width: "50%", height: "50%"objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Monitor;
