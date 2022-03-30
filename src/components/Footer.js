import React from "react";
import logo from "../assets/img/logo.svg";
import "./styles/footer.css";
import abba1 from "../assets/img/abba1.svg";
import abba2 from "../assets/img/abba2.svg";
function Footer() {
  return (
    <div>
      <footer>
        <div className="footer__item">
          <img src={logo} alt="" />
          <b>luxury development company </b>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer__item">
          <a href="/">галерия</a>
          <a href="/">партнеры</a>
          <a href="/">контакы</a>
          <a href="/">о нас</a>
        </div>
        <div className="footer__item">
          <a href="/">интерьер и экстерьер дизайн</a>
          <a href="/">CТРОИТЕЛЬСТВА И ОТДЕЛКА</a>
        </div>
        <div className="footer__item four">
          <span href="/">Адрес:</span>
          <a href="/">г.Ташкент, Дархан Тамара Ханум 4а</a>
          <span href="/">Телефон:</span>
          <a href="/">95-004-80-90</a>
          <a href="/">94-641-40-00</a>
        </div>
      </footer>
      <div className="fixed">
        <div className="container">
          <div className="footer__bottom">
            <p>©2022 All rights reserved nuran.uz</p>
            <div className="row">
              <p>Website development by Life Style</p>
              <div>
                <img src={abba1} alt="" />
                <img src={abba2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
