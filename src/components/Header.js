import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import "./styles/header.css";
import { Link } from "react-router-dom";
import arrow from "../assets/img/toleft.svg";
function Header(props) {
  const [clas, setClas] = React.useState("");
  const [link, setLink] = React.useState("");
  React.useEffect(() => {
    setClas("transform");
    setTimeout(() => {
      setClas("");
    }, 1000);
  }, [link]);

  return (
    <div className="header">
      <FadeIn>
        <h1>{props.titleName}</h1>
      </FadeIn>
      <Link to={link}>
        <button>
          {props.buttonName} <img className={clas} src={arrow} alt="" />
        </button>
      </Link>
      <FadeIn className="navigation">
        <a
          className={props.active === "interer" || link === "/interer" && "active"}
          onClick={() => setLink("/interer")}
        >
          интерьер и экстерьер дизайн
        </a>
        <a
          className={props.active === "finishing" || link === "/finishing"  && "active"}
          onClick={() => setLink("/finishing")}
        >
          CТРОИТЕЛЬ- СТВА И ОТДЕЛКА
        </a>
        <a
          className={props.active === "about" || link === "/about" && "active"}
          onClick={() => setLink("/about")}
        >
          о НАС
        </a>
        <a
          className={props.active === "service" || link === "/service"  && "active"}
          onClick={() => setLink("/service")}
        >
          НАШИ УСЛУГИ
        </a>
      </FadeIn>
      <div className={props.imgName}></div>
    </div>
  );
}

export default Header;
