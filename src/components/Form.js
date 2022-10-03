import "./Form.css";
import { useEffect, useState } from "react";

export function Form({ appendCard }) {
  const [pickedColor, setPickedColor] = useState("#FFFFFF");
  console.log(pickedColor);
  const onChangeColor = (event) => {
    console.log(event.target.value);
    setPickedColor(event.target.value);
  };

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
        <input type="color" id="color" name="color" onChange={onChangeColor} />
        <label HTMLfor="hexcode">Or insert a Hexcode</label>
        <input type="text" id="hexocde" name="hexcode" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
