import "./Card.css";

export function Card({ id, hexcode, deleteCard, editCard, editModeOn }) {
  function handleDeleteCard() {
    deleteCard(id);
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
    <div className="card" style={{ backgroundColor: hexcode }}>
      <p
        className="card__hexcode"
        onClick={() => navigator.clipboard.writeText(hexcode)}
      >
        {hexcode}
      </p>
      <button className="card__delete" onClick={handleDeleteCard}>
        X
      </button>
      <form className="editform" onSubmit={handleEditCard}>
        <button type="submit">Edit</button>
        {editModeOn === true ? (
          <input type="color" id="newcolor" name="newcolor" />
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
