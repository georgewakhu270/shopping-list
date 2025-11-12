import { useState } from "react";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [names, setNames] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0.0);
  return (
    <div className="App">
      <div>
        <h1>Shopping List</h1>
        <div>
          <form>
            <label>Item Name</label>
            <input type="text" />
            <label>Price</label>
            <input type="number" />
            <label>Quantity</label>
            <input type="number" />
            <p>The price is </p>
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
