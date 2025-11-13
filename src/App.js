import { useState } from "react";
import "./styles.css";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [names, setNames] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0.0);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [popup, setPopup] = useState(false);

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, { name: names, quantity: quantity, price: price }]);
    setTotalPrice(
      items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    setPopup(false);
    setNames("");
    setQuantity(1);
    setPrice(0.0);
  };

  return (
    <div className="App">
      <div>
        <h1>Shopping List</h1>
        <button onClick={() => setPopup(true)} className="open-popup-btn">
          +
        </button>
        {popup && (
          <div className="form-div">
            <div className="div-border">
              <button
                className="close-popup-btn"
                onClick={() => setPopup(false)}
              >
                &times;
              </button>
              <h2>Add New Item</h2>
              <form onSubmit={addItem}>
                <div className="form-group">
                  <label>Item Name</label>
                  <input
                    type="text"
                    value={names}
                    placeholder="e.g Sugar"
                    onChange={(e) => setNames(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Price ($)</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="price-display">
                  <p>
                    The price is
                    <span className="price-value">$ {price * quantity}</span>
                  </p>
                </div>
                <button type="submit" className="submit-button">
                  submit
                </button>
              </form>
            </div>
          </div>
        )}
        <div>
          {items.map((item, key) => (
            <div key={key}>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
