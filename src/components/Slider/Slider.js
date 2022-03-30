import React from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";

import "aos/dist/aos.css";
import "../styles/slider.css";

function Sliders() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings} className={"slider__one"}>
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider>
    </div>
  );
}

export default Sliders;
