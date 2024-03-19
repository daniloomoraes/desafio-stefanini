import React from "react";

import "../../../style/Main.scss";

import { Character } from "../../../interface/Character"; 

interface CardsProps {
  character: Character;
}

const Cards: React.FC<CardsProps> = ({ character }) => {

  return (
    <>
      <div className="card">
        <img src={character.image ? character.image : "https://i.pinimg.com/originals/d0/38/1f/d0381f8d14f762209f24a90964fb2be1.jpg"} alt={character.name} />
        <div className="container">
          <h4>
            <b>{character.name}</b>
          </h4>
          {character.dateOfBirth && (
            <p>
              <b>Nascimento:</b> {character.dateOfBirth}
            </p>
          )}
          {character.house && (
            <p>
              <b>Casa:</b> {character.house}
            </p>
          )}
          {character.patronus && (
            <p>
              <b>Patrono:</b> {character.patronus}
            </p>
          )}
          {character.actor && (
            <p>
              <b>Ator:</b> {character.actor}
            </p>
          )}
          <p>
            <b>Vivo:</b> {character.alive ? "Sim" : "Não"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
