import { useState } from "react";
import "./styles.css";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [names, setNames] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [testPrice, setTestPrice] = useState(0.0);
  return (
    <div className="App">
      <div>
        <h1>Shopping List</h1>
        <div className="form-div">
          <div className="div-border">
            <h2>Add New Item</h2>
            <form>
              <div className="form-group">
                <label>Item Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Price ($)</label>
                <input type="number" />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input type="number" />
              </div>
              <div className="price-display">
                <p>
                  The price is
                  <span className="price-value">$ {testPrice}</span>
                </p>
              </div>
              <button>submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
