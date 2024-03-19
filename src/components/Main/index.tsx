import React, { useState, useEffect } from "react";
import "../../style/Main.scss";

import Cards from "./Cards";

import { Character } from "../../interface/Character"; 

const Main: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Character[] = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
        {characters.map((character, index) => (
          <Cards key={index} character={character} />
        ))}
      </div>
    </>
  );
};

export default Main;
