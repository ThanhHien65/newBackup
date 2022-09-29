import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import Slider from "infinite-react-carousel";
const Monitor = () => {
  document.title = "Monitor";
  return (
    <Slider slidesToShow={5} dots duration={100}>
      
    </Slider>
  );
};

export default Monitor;
