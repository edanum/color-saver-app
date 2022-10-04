import { useState, useEffect } from "react";
import "./Card.css";

export function Card({ id, hexcode, deleteCard, editCard }) {
  const [pickedColor, setPickedColor] = useState(hexcode);
  const [colorName, setColorName] = useState(hexcode);

async function fetchColors(code) {
  const response = await fetch(
    `https://www.thecolorapi.com/id?hex=${code.substring(1)}`
  );
  const data = await response.json();
  setColorName(data.name.value);
}

useEffect(() => {
  fetchColors(hexcode);
}, []);

//DIese Funktion ermittelt eine lesbare Farbe in Abnhängigkeit des Hinterfrundes
  function getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  }

  function handleDeleteCard() {
    deleteCard(id);
  }

  function onChange(event) {
    setPickedColor(event.target.value);
  }

  function handleEditCard(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data);
    const newColor = values.newcolor;
    console.log(values);
    editCard(id, newColor);
  }

  return (
    <div className="card" style={{ backgroundColor: pickedColor }}>
      <form className="editform" onSubmit={handleEditCard}>
        <div style={{ color: getContrastYIQ(pickedColor) }}>{colorName}</div>
        <button
          type="submit"
          className="card__hexcode"
          onClick={() => {
            navigator.clipboard.writeText(hexcode);
          }}
        >
          {hexcode}
          <input
            className="coloreditor"
            type="color"
            id="newcolor"
            name="newcolor"
            onChange={onChange}
            value={pickedColor}
          ></input>
        </button>
      </form>
      <button className="card__delete" onClick={handleDeleteCard}>
        X
      </button>
    </div>
  );
}
