import React from "react";
import partner from "../assets/img/partner.svg";
import Slider from "react-slick";
import img from "../assets/img/user.png";
import start from "../assets/img/start.svg";
import ScrollTop from "./ScrollTop"
import "../components/styles/comment.css";
function Comment() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div>
      <ScrollTop />
      <div className="title__partner">
        <img src={partner} alt="" />
        отзывы
      </div>
      <div className="comment__body">
        <Slider {...settings} className={"slider__one"}>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div className="up__card">
              <div className="card__comment">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Adipiscing sem egestas amet sit sit. Quis mauris risus, risus
                  amet mattis. Semper enim amet malesuada augue amet neque,
                  justo. Neque, nec id mi risus neque, in bibendum consectetur.
                  Est est convallis faucibus euismod. Nec, ut viverra lectus
                  proin amet. Enim tellus velit non vulputate ac. Vitae ornare
                  hendrerit eu, donec nec feugiat risus tristique ipsum. Felis
                  feugiat adipiscing quis cum vulputate id. Adipiscing nec eget
                  vel volutpat.
                </p>
                <div className="user__profile">
                  <img src={img} alt="" className="user__img" />
                  <div className="col">
                    <p>
                      <span>feruza abdullayeva</span>
                    </p>
                    <div className="row__start">
                      <img src={start} alt="" />
                      <img src={start} alt="" />
                      <img src={start} alt="" />
                      <img src={start} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="row__iframe">
        <iframe
          src="https://www.youtube.com/embed/4EfM6rPmxow"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/4EfM6rPmxow"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Comment;
