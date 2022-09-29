import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import Slider from "infinite-react-carousel";
import { ImageMonitor } from "./Globaldata";
const Monitor = () => {
  document.title = "Monitor";
  const ListImage = [
    {
      name: "OffGW_08092022-08:09.png",
      url: "http://localhost:5000/img/OffGW_08092022-08:09.png",
    },
    {
      name: "OffGW_16092022-08:30.png",
      url: "http://localhost:5000/img/OffGW_16092022-08:30.png",
    },
    {
      name: "OffGW_28092022-11:48.png",
      url: "http://localhost:5000/img/OffGW_28092022-11:48.png",
    },
    {
      name: "OffGW_28092022-11:50.png",
      url: "http://localhost:5000/img/OffGW_28092022-11:50.png",
    },
    {
      name: "OffGW_30082022-14:46.png",
      url: "http://localhost:5000/img/OffGW_30082022-14:46.png",
    },
    {
      name: "OffGW_30082022-14:47.png",
      url: "http://localhost:5000/img/OffGW_30082022-14:47.png",
    },
    {
      name: "Offmonitor_08092022-08:09.png",
      url: "http://localhost:5000/img/Offmonitor_08092022-08:09.png",
    },
    {
      name: "Offmonitor_16092022-08:30.png",
      url: "http://localhost:5000/img/Offmonitor_16092022-08:30.png",
    },
    {
      name: "Offmonitor_28092022-11:48.png",
      url: "http://localhost:5000/img/Offmonitor_28092022-11:48.png",
    },
    {
      name: "Offmonitor_28092022-11:49.png",
      url: "http://localhost:5000/img/Offmonitor_28092022-11:49.png",
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
  const 

  return (
    <div className="container_content">
      <Slider slidesToShow={1} dots duration={100}>
        {image.map((item, index) => {
          return (
            <div
              className="image_monitor"
              key={index}
              value={index}
              style={{ textAlign: "center" }}
            >
              <p>{item.name}</p>
              <img
                onClick={() => console.log(Allimage)}
                src={item.url}
                alt=""
                style={{
                  width: "100%",
                  objectFit: "cover",
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
