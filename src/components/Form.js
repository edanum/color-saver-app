import "./Form.css";
import { useEffect, useState } from "react";

export function Form({ appendCard }) {
  const [pickedColor, setPickedColor] = useState("#FFFFFF");
    console.log(pickedColor);
    
  const onChangeColor = (event) => {
    console.log(event.target.value);
    setPickedColor(event.target.value);
  };
    
    // const onChangeHexcode = (event) => {
    //     setPickedColor(event.targelt.value);
    // };

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data);
    console.log(values);
    appendCard(values.hexcode || values.color);
  }

  return (
    <div>
      <form
        className="form"
        style={{ backgroundColor: pickedColor }}
        onSubmit={handleSubmit}
      >
        <label HTMLfor="color">Pick a Color</label>
        <input
          type="color"
          id="color"
          name="color"
          onChange={onChangeColor}
          value={pickedColor}
        />
        <label HTMLfor="hexcode">Hexcode</label>
        <input
          type="text"
          id="hexocde"
          name="hexcode"
          placeholder={pickedColor}
          onChange={onChangeColor}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
