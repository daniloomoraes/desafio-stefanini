import React from "react";
import "../../style/Header.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div className="my-component">
        <h1>Hello, world!</h1>
        <p>This is my styled component.</p>
      </div>
    </header>
  );
};

export default Header;
