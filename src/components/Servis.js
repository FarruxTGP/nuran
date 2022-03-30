import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Servis() {
  return (
    <div>
      <div className="about">
        {[1, 2, 3, 4].map((item) => (
          <Link to={"" + item}>
            <div
              className="header__about"
              key={item}
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <img
                src="https://get.wallhere.com/photo/wooden-surface-room-wood-house-stairs-interior-design-cottage-estate-lobby-design-floor-home-hardwood-loft-2560x1600-px-farmhouse-flooring-wood-flooring-laminate-flooring-property-living-room-548993.jpg"
                alt=""
              />
              <div className="txt__about">
                <br />
                <br />
                <h1>
                  <span> Услуги дизайнера </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet orci scelerisque non malesuada neque. Sed vitae
                  nulla amet urna.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Imperdiet orci scelerisque non malesuada
                  neque. Sed vitae nulla amet urna.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Servis;
