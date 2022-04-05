import React from "react";
import logo from "../assets/img/logo.svg";
import youtube from "../assets/img/youtube.svg";
import telegram from "../assets/img/telegram.svg";
import instagram from "../assets/img/instagram.svg";
import facebook from "../assets/img/facebook.svg";
import call from "../assets/img/call.svg";
import { Context } from "./Wrapper";
import FadeIn from "react-fade-in/lib/FadeIn";
function Welcome({ setWelcome }) {
  const context = React.useContext(Context);
  return (
    <div className="welcome">
      <div className="logo">
        <img src={logo} alt="" />
        <p>
          Добро пожаловать в <span>Nuran Group</span>
        </p>
        <FadeIn className="row__setlang">
          <button
            value={"uz"}
            onClick={() => {
              localStorage.setItem("lang", "uz");
              setWelcome(false);
            }}
            onMouseEnter={context.selectLanguage}
          >
            UZ
          </button>
          <button
            value={"ru"}
            onClick={() => {
              localStorage.setItem("lang", "ru");
              setWelcome(false);
            }}
            onMouseEnter={context.selectLanguage}
          >
            RU
          </button>
          <button
            value={"en"}
            onClick={() => {
              localStorage.setItem("lang", "en");
              setWelcome(false);
            }}
            onMouseEnter={context.selectLanguage}
          >
            ENG
          </button>
        </FadeIn>
        <FadeIn className="row__social">
          <a href="#">
            <img src={youtube} alt="" />
          </a>
          <a href="#">
            <img src={telegram} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </FadeIn>
      </div>
      <div className="call">
        <img src={call} alt="" />
        <div className="n">
          <a href="tel: +998950048090">95-004-80-90</a>
          <a href="tel: +99894641400">94-641-40-00</a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
