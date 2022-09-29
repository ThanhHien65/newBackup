import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import Slider from "infinite-react-carousel";
const Monitor = () => {
  document.title = "Monitor";
  return (
    // <div className="container_content">
    //   <div
    //     className="image_monitor"
    //     style={{
    //       width: "100%",
    //       height: "40%",
    //       padding: "1rem",
    //       margin: "0 auto",
    //       textAlign: "center",
    //     }}
    //   >
    //     <img
    //       src="http://localhost:5000/img/OffGW_30082022-14:47.png"
    //       alt=""
    //       style={{ width: "100%", height: "100%", objectFit: "cover" }}
    //     />
    //   </div>
    // </div>
    <Slider slidesToShow={5} dots duration={100} autoplay={auto}>
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
                    <h1 style={{ fontSize: "1.6rem" }}>
                      {index.original_title}
                    </h1>
                  </div>
                  <p style={{ fontSize: "1.6rem", color: "rgba(0,0,0,0.6)" }}>
                    {moment(index.release_date).format("MMMM DD, YYYY")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        
      })}
    </Slider>
  );
};

export default Monitor;
