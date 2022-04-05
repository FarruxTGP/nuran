import React from "react";
import "../components/styles/inter.css";
import img from "../assets/img/inter.png";
import img1 from "../assets/img/inter2.png";
import FadeIn from "react-fade-in/lib/FadeIn";
import arrow from "../assets/img/arrow.svg";
import refresh from "../assets/img/refresh.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ScrollAdd from "./ScrollAdd";
import Header from "./Header";
import HeaderBottom from "./HeaderBottom";
function Finishings() {
  const [tab, setTab] = React.useState(0);
  return (
    <div>
     
      <HeaderBottom />
      <div className="header__inter">
        <button className={tab == 0 && "active"} onClick={() => setTab(0)}>
          отделка{" "}
        </button>
        <button className={tab == 1 && "active"} onClick={() => setTab(1)}>
          CТРОИТЕЛЬСТВА{" "}
        </button>
      </div>
      {tab === 0 ? (
        <FadeIn className="body__inter">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Link to={"" + item} className="item__inter">
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
      ) : (
        <FadeIn className="body__inter">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Link to={"" + item} className="item__inter">
              <img
                src="https://i.pinimg.com/originals/59/c7/da/59c7dadbc6476090705a28b632e74f4e.jpg"
                alt=""
              />
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
      )}
      <div className="center">
        <button className="more">
          <img src={refresh} alt="" />
          показать еще
        </button>
      </div>
      <div className="interer__iframe">
        <iframe
          src="https://www.youtube.com/embed/N4YiAKTZVjI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Finishings;
