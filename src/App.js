import logo from './logo.svg';
import './App.css';
import { Card } from "./components/Card"

function App() {

  const colors = [
    { id: 1,  hexcode: "#000000" },
    { id: 2,  hexcode: "#FF0000" },
    { id: 3,  hexcode: "#00FFFF" },
    { id: 4,  hexcode: "#0F06FF" },
    { id: 5,  hexcode: "#FFF000" },
    { id: 6,  hexcode: "#FFFFFF" },
  ];

  return (
    <div className="App">
      {colors.map(color => {
        return <Card key={color.key} colorname={color.colorname} hexcode={color.hexcode} />;
      })
      }
     
    </div>
  );
}

export default App;
