import React from "react";
import partner from "../assets/img/partner.svg";
import FadeIn from "react-fade-in/lib/FadeIn";
import "../components/styles/partner.css";
import img from "../assets/img/part.png";


function Partner() {
  return (
    <div>
     
      <div className="title__partner">
        <img src={partner} alt="" />
        ПАРТНЕРЫ
      </div>
      <FadeIn className="body__partner">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div className="item__partner">
            <img src={img} alt="" />
          </div>
        ))}
      </FadeIn>
    </div>
  );
}

export default Partner;
