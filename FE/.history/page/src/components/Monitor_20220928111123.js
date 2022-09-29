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
    <div
      className="container_content"
      style={{ width: "100%", display: "flex" }}
    >
      {/* <h1 onClick={() => console.log(image)}>test</h1> */}
      <Slider slidesToShow={5} dots duration={100}>
        <div className="image_monitor">
          {image.map((item, index) => {
            return <img src={item.url} alt="" />;
          })}
        </div>
        <div className="container_image">
          <div className="image_item" key={i} value={i}>
            <img
              src={
                index.poster_path === null
                  ? "https://static.thenounproject.com/png/741653-200.png"
                  : getImage(index.poster_path)
              }
              alt=""
              className={i}
              onClick={transferdata}
            />
            <div className="votecirle">
              <div
                className="vote"
                style={{ color: setVote(index.vote_average) }}
              >
                <h1>
                  {index.vote_average.toString().replace(".", "")}
                  <b style={{ fontSize: "1rem", position: "absolute" }}>%</b>
                </h1>
              </div>
              <div className="infordetail">
                <div className="infotittle">
                  <h1 style={{ fontSize: "1.6rem" }}>{index.original_title}</h1>
                </div>
                <p style={{ fontSize: "1.6rem", color: "rgba(0,0,0,0.6)" }}>
                  {moment(index.release_date).format("MMMM DD, YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
        )})}
      </Slider>
    </div>
  );
};

export default Monitor;
