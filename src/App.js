import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const colors = [
  { id: 1, hexcode: "#000000", editModeOn: true },
  { id: 2, hexcode: "#FF0000", editModeOn: true },
  { id: 3, hexcode: "#00FFFF", editModeOn: true },
  { id: 4, hexcode: "#0F06FF", editModeOn: false },
  { id: 5, hexcode: "#FFF000", editModeOn: false },
  { id: 6, hexcode: "#FFFFFF", editModeOn: false },
];

function App() {
  const [cards, setCards] = useState(colors);

  function appendCard(color) {
    setCards([{ id: nanoid(), hexcode: color, editModeOn: false }, ...cards]);
    console.log(color);
  }

  function deleteCard(id) {
    setCards(cards.filter((item) => item.id !== id));
  }

  function editCard(id) {
    console.log("Edit Button works");
    setCards(
      cards.map((item) => {
        return item.id === id
          ? { id: item.id, hexcode: item.hexcode, editModeOn: !item.editModeOn }
          : { id: item.id, hexcode: item.hexcode, editModeOn: item.editModeOn };
      })
    );
  }

  // Hier einbauen: Wert im Array, der angibt ob Edit Mode on oder off ist

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
              editModeOn={color.editModeOn}
              // Hier den Edit Wert mitgeben
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
