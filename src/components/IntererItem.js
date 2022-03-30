import React, { useState } from "react";
import FadeIn from "react-fade-in";
import img from "../assets/img/inter.png";
import arrow from "../assets/img/arrow.svg";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ScrollTop from "./ScrollTop";
function IntererItem() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <ScrollTop />
      {modal && (
        <div className="modal">
          <div className="modal__body">
            <span onClick={() => setModal(false)}>&times;</span>
            <input type="text" placeholder="Telefon raqam" />
            <input type="text" placeholder="Ismi" />
            <button>Send</button>
          </div>
        </div>
      )}
      <div className="product">
        <Carousel>
          <div>
            <img src="http://hhphotos.homehound.com.au/RWXML/1185/577405/15310748_03_x.jpg" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/5d/0f/ce/5d0fce649f1749d4c08849162e0fa789.jpg" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/c0/1c/97/c01c979c387c6d3b77f9c1151f591d3c.jpg" />
          </div>
        </Carousel>
        <div className="info">
          <div className="title__info">
            <h1>Лофт</h1>
            <span>3х комнатная квартира</span>
          </div>
          <div className="body__info">
            <div className="row">
              <span>площадь квартира</span>
              <p>38м/кв</p>
            </div>
            <div className="row">
              <span>площадь квартира</span>
              <p>38м/кв</p>
            </div>
            <div className="row">
              <span>площадь квартира</span>
              <p>38м/кв</p>
            </div>
            <div className="row">
              <span>площадь квартира</span>
              <p>38м/кв</p>
            </div>
          </div>
          <button onClick={() => setModal(true)}>Свазаться</button>
        </div>
      </div>
      <div className="bottom_i_item">
        <h1>похожие проэкты</h1>
        <FadeIn className="body__inter">
          {[0, 1, 2].map((item) => (
            <Link to={"/interer/" + item} className="item__inter">
              <img src={img} alt="" />
              <div className="tec">
                <div className="col">
                  <span>Лофт</span>
                  <p>3х комнатная квартира</p>
                </div>
                <img src={arrow} alt="" />
              </div>
            </Link>
          ))}
        </FadeIn>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default IntererItem;
