import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Form } from "./components/Form";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { colorsArray } from "./data/colors";



function App() {
  const [colors, setColors] = useState(
    JSON.parse(localStorage.getItem("colors")) || colorsArray
  );

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function appendCard(color) {
    setColors([{ id: nanoid(), hexcode: color.toUpperCase() }, ...colors]);
  }

  function deleteCard(id) {
    setColors(colors.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Form key={nanoid()} appendCard={appendCard} />
      <div className="cardcontainer">
        {colors.map((color) => {
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
