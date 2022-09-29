import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import Slider from "infinite-react-carousel";
import { OFgw, OFmonitor } from "./Globaldata";
const Monitor = () => {
  document.title = "Monitor";
  const imgMonitor = useRecoilValue(OFmonitor);
  const imgGW = useRecoilValue(OFgw);
  // const FreezeImage = DataImage.map((a) => {
  //   return { ...a };
  // });
  const [image, SetImage] = useState([]);
  return (
    <div className="container_content">
      <Slider slidesToShow={1} dots duration={100}>
        {imgGW.map((item, index) => {
          return (
            <div
              className="image_monitor"
              key={index}
              value={index}
              style={{ textAlign: "center" }}
            >
              <p>{item.time}</p>
              <img
                src={item.urlimg}
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
