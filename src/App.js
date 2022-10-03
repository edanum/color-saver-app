import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const colors = [
  { id: 1, hexcode: "#000000" },
  { id: 2, hexcode: "#FF0000" },
  { id: 3, hexcode: "#00FFFF" },
  { id: 4, hexcode: "#0F06FF" },
  { id: 5, hexcode: "#FFF000" },
  { id: 6, hexcode: "#FFFFFF" },
];

function App() {
  const [cards, setCards] = useState(colors);

  function appendCard(color) {
    setCards([{ id: nanoid(), hexcode: color }, ...cards]);
    console.log(color);
  }

  function deleteCard(id) {
    setCards(cards.filter((item) => item.id !== id));
  }

  function editCard(id) {
    console.log("Edit triggered");
  }

  return (
    <div className="App">
      <Form key={nanoid()} appendCard={appendCard} />
      <div className="card__container">
        {cards.map((color) => {
          return (
            <Card
              key={color.id}
              id={color.id}
              hexcode={color.hexcode}
              deleteCard={deleteCard}
              editCard={editCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
