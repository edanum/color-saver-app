import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import {colorsArray} from "./data/colors"

const colors = [
  { id: 1, hexcode: "#000000" },
  { id: 2, hexcode: "#FF0000" },
  { id: 3, hexcode: "#00FFFF" },
  { id: 4, hexcode: "#0F06FF" },
  { id: 5, hexcode: "#FFF000" },
  { id: 6, hexcode: "#FFFFFF" },
];

function App() {
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem("colors"))|| colorsArray );

  useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)),[colors])

  function appendCard(color) {
    setCards([{ id: nanoid(), hexcode: color.toUpperCase() }, ...cards]);
  }

  function deleteCard(id) {
    setCards(cards.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Form key={nanoid()} appendCard={appendCard} />
      <div className="cardcontainer">
        {cards.map((color) => {
          return (
            <Card
              key={color.id}
              id={color.id}
              hexcode={color.hexcode}
              deleteCard={deleteCard}
              editModeOn={color.editModeOn}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
