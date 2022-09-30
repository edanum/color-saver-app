import "./Form.css"

export function Form(setCards) {
    
    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const values = Object.fromEntries(data);
        console.log(values)
    }

 return <div>
    <form className="form" onSubmit={handleSubmit}>
      <input type="color" id="color" name="color" />
      <input type="text" id="hexocde" name="hexcode" />
      <button type="submit">Add</button>
    </form>
  </div>;
}
