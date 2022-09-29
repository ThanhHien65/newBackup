import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import Slider from "infinite-react-carousel";
const Monitor = () => {
  document.title = "Monitor";
  const [image,SetImage]= useState()
  return (
    <Slider slidesToShow={5} dots duration={100}>
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
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </Slider>
  );
};

export default Monitor;
