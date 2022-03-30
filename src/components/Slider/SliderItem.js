import React from "react";
import img from "../../assets/img/slider.png";
function SliderItem() {
  return (
    <div>
      <div className="slider__item">
        <img src={img} alt="" />
        <div className="text__content">
          <div className="column">
            <h1>СLASSIC STYLE</h1>
            <ul>
              <li>3Х КОМНАТНАЯ КВАРТИРА</li>
              <li>56 КВ/М </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
