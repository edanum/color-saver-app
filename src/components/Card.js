import { useState } from "react";
import "./Card.css";

export function Card({ id, hexcode, deleteCard, editCard, editModeOn }) {
  const [pickedColor, setPickedColor] = useState(hexcode);

  function handleDeleteCard() {
    deleteCard(id);
  }
    
    function onChange(event) {
        setPickedColor(event.target.value)
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
        <button
          type="submit"
          className="card__hexcode"
          onClick={() => {
            navigator.clipboard.writeText(hexcode);
          }}
        >
          {hexcode}
        </button>
        {editModeOn === true ? (
          <input
            type="color"
            id="newcolor"
                      name="newcolor"
                      onChange={onChange}
            value={pickedColor}
          />
        ) : (
          ""
        )}
      </form>
      <button className="card__delete" onClick={handleDeleteCard}>
        X
      </button>
    </div>
  );
}
