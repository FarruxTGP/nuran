import React, { useState } from "react";

function HeaderBottom() {
  const [modal, setModal] = useState(false);
  return (
    <div className="header__bottom">
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
      <button className="down" onClick={() => setModal(true)}>
        скачать каталог
      </button>
      <button className="msg" onClick={() => setModal(true)}></button>
    </div>
  );
}

export default HeaderBottom;
