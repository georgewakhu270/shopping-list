import { useState } from "react";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <div>
        <h1>Shopping List</h1>
        <div>
          <form>
            <label>Item</label>
            <input type="text" />
            <label>Price</label>
            <input type="number" />
            <label>Quantity</label>
            <input type="number" />
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
