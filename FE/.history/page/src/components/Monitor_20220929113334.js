import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import Slider from "infinite-react-carousel";
import {o} from "./Globaldata";
const Monitor = () => {
  document.title = "Monitor";
  const imgMonitor
  // const FreezeImage = DataImage.map((a) => {
  //   return { ...a };
  // });
  const [image, SetImage] = useState([]);
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
