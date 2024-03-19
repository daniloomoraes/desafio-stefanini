import React from "react";

import "../../../style/Main.scss";


const Cards: React.FC = () => {
  return (
    <>
      <div className="card">
        <img src="https://ik.imagekit.io/hpapi/umbridge.jpg" alt="Avatar" />
        <div className="container">
          <h4>
            <b>Nome</b>
          </h4>
          <p><b>Nascimento:</b> Architect & Engineer</p>
          <p><b>Casa:</b> Architect & Engineer</p>
          <p><b>Patrono:</b> Architect & Engineer</p>
          <p><b>Ator:</b> Architect & Engineer</p>
          <p><b>Vivo:</b> Architect & Engineer</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
