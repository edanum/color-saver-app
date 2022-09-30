import "./Card.css"


export function Card({ hexcode, handleDeleteCard }) {
    
    return (
      <div className="card" style={{ backgroundColor: hexcode }}>
        <p
          className="card__hexcode"
          onClick={() => navigator.clipboard.writeText(hexcode)}
        >
          {hexcode}
            </p>
            <button onClick={handleDeleteCard}>Delete</button>
      </div>
    );
}