import { useState } from "react";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <div>
        <h1>Shopping List</h1>
      </div>
    </div>
  );
}
