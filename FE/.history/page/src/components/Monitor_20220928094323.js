import React from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
const Monitor = () => {
  document.title = "Monitor";
  return (
    <div className="container_content">
      <img src="http://localhost:5000/img/OffGW_30082022-14:47.png" alt="" />
    </div>
  );
};

export default Monitor;
