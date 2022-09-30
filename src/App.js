import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Card } from "./components/Card"
import { Form } from "./components/Form"
import { useState, useEffect } from "react"
import {nanoid} from "nanoid"

function App() {

  const colors = [
    { id: 1,  hexcode: "#000000" },
    { id: 2,  hexcode: "#FF0000" },
    { id: 3,  hexcode: "#00FFFF" },
    { id: 4,  hexcode: "#0F06FF" },
    { id: 5,  hexcode: "#FFF000" },
    { id: 6,  hexcode: "#FFFFFF" },
  ];

  const [cards, setCards] = useState (colors)

  return (
    <div className="App">
      <Form key={nanoid()}setCards={setCards} />
      <div className="cardcontainer">
        {colors.map((color) => {
          return (
            <Card
              key={color.id}
              hexcode={color.hexcode}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
