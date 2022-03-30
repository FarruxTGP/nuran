import React from "react";
import logo from "../assets/img/logo.svg";
import call from "../assets/img/call.svg";
import "./styles/nav.css";
import FadeIn from "react-fade-in";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <FadeIn>
        <NavLink to={"/"}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
      </FadeIn>
      <FadeIn>
        <ul>
          <li>
            <NavLink to={"/service"}>услуги</NavLink>
          </li>
          <li>
            <NavLink to={"/interer"}>галерия</NavLink>
          </li>
          <li>
            <NavLink to={"/partners"}>партнеры</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>контакы</NavLink>
          </li>
          <div className="call">
            <img src={call} alt="" />
            <div className="n">
              <a href="tel: +998950048090">95-004-80-90</a>
              <a href="tel: +99894641400">94-641-40-00</a>
            </div>
          </div>
        </ul>
      </FadeIn>
    </nav>
  );
}

export default Nav;
