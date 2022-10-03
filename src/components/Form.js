import "./Form.css";
import { useEffect, useState } from "react";

export function Form({ appendCard }) {
    const [pickedColor, setPickedColor] = useState("#FFFFFF");
    const [fontColor, setFontColor] = useState("#000000")
    console.log(pickedColor);
    
  const onChangeColor = (event) => {
    console.log(event.target.value);
      setPickedColor(event.target.value);
      setFontColor(getContrastColor(event.target.value));
  };
    
    //Function to choose which font color is needed
function getContrastColor(hexcolor) {
  hexcolor = hexcolor.replace("#", "");
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

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
        style={{ backgroundColor: pickedColor , color: fontColor}}
        onSubmit={handleSubmit}
      >
        <label HTMLfor="color">Pick a Color ..</label>
        <input
          type="color"
          id="color"
          name="color"
          onChange={onChangeColor}
          value={pickedColor}
        />
        <label HTMLfor="hexcode">or a Hexcode</label>
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
