import React from "react";
import "../../style/Main.scss";

import Cards from "./Cards";

const Main: React.FC = () => {
  return (
    <>
      <div className="title">
        <h1>Seja bem-vindo!</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt
          porta rutrum.{" "}
        </h2>
      </div>
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default Main;
