import "./Card.css"


export function Card({ key, colorname, hexcode }) {
    
    return (
      <div className="card" style={{ backgroundColor: hexcode }}>
        <p
          className="card__hexcode"
          onClick={() => navigator.clipboard.writeText(hexcode)}
        >
          {hexcode}
        </p>
      </div>
    );
}