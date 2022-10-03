import "./Card.css";

export function Card({ id, hexcode, deleteCard, editCard, editModeOn }) {
  function handleDeleteCard() {
    deleteCard(id);
  }

  function handleEditCard() {
    editCard(id);
  }

  return (
    <div className="card" style={{ backgroundColor: hexcode }}>
      <p
        className="card__hexcode"
        onClick={() => navigator.clipboard.writeText(hexcode)}
      >
        {hexcode}
      </p>
      <button onClick={handleDeleteCard}>Delete</button>
      <button onClick={handleEditCard}>Edit</button>
      {editModeOn === true ? (
        <input type="color" id="colorchange" name="colorchange" />
      ) : (
        ""
      )}
    </div>
  );
}
