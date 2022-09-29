import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import Slider from "infinite-react-carousel";
const Monitor = () => {
  document.title = "Monitor";
  const ListImage = [
    {
      name: "OffGW_30082022-14:46.png",
      url: "http://localhost:5000/img/OffGW_30082022-14:46.png",
    },
    {
      name: "OffGW_30082022-14:47.png",
      url: "http://localhost:5000/img/OffGW_30082022-14:47.png",
    },
    {
      name: "Offmonitor_30082022-14:34.png",
      url: "http://localhost:5000/img/Offmonitor_30082022-14:34.png",
    },
    {
      name: "Offmonitor_30082022-14:47.png",
      url: "http://localhost:5000/img/Offmonitor_30082022-14:47.png",
    },
  ];
  const [image, SetImage] = useState(ListImage);
  return (
    <div className="container_content">
      <Slider slidesToShow={1} dots duration={100}>
        {image.map((item, index) => {
          return (
            <div
              className="image_monitor"
              key={index}
              value={index}
              style={{ textAlign: "center", width: "100%" }}
            >
              <img
                src={item.url}
                alt=""
                style={{
                  width: "100%",
                  // height: "50%",
                  // backgroundPosition: "center",
                  // height: "100%",
                  // objectFit: "cover",
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Monitor;
