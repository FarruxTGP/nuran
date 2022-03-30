import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import "./styles/header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <FadeIn>
        <h1>интерьер и экстерьер дизайн</h1>
      </FadeIn>
      <button>перейти</button>
      <FadeIn className="navigation">
        <NavLink to={"/interer"}>интерьер и экстерьер дизайн</NavLink>
        <NavLink to={"/finishing"}>CТРОИТЕЛЬ- СТВА И ОТДЕЛКА</NavLink>
        <NavLink to={"/about"}>о НАС</NavLink>
        <NavLink to={"/service"}>НАШИ УСЛУГИ</NavLink>
      </FadeIn>
      <div className="bg"></div>
    </div>
  );
}

export default Header;
