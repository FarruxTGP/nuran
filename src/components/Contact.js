import React from "react";
import partner from "../assets/img/partner.svg";
import "./styles/contact.css";
import opa from "../assets/img/opa.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function Contact() {
  return (
    <div className="contact">
      <div className="contact__body">
        <div className="title__partner">
          <img src={partner} alt="" />
          связаться с нами
        </div>
        <div className="row__contact">
          <form action="">
            <div className="item__input">
              <p>номер телефона</p>
              <PhoneInput
                country={"uz"}
              />
            </div>
            <div className="item__input">
              <p>ваша имя</p>
              <input type="text" name="" id="" />
            </div>
            <button type="button">отправить</button>
          </form>
          <div className="img">
            <img src={opa} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
