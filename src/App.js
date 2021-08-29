import { useState } from "react";
import "./styles.css";
var cuisineDB = {
  Indian: [
    { name: "Kichidi", rating: "4.5/5" },
    { name: "Biryani", rating: "4/5" },
    { name: "Bhindi", rating: "5/5" }
  ],
  Chinese: [
    { name: "Dim sum", rating: "5/5" },
    { name: "Noodles", rating: "4.5/5" },
    { name: "Manchurian", rating: "4/5" }
  ],
  Italian: [
    { name: "Pizza", rating: "3.5/5" },
    { name: "Pasta", rating: "4/5" },
    { name: "Spaghetti", rating: "4/5" }
  ]
};
export default function App() {
  const [cuisine, setCuisine] = useState("Italian");
  function handleClick(cuisine) {
    setCuisine(cuisine);
  }

  return (
    <div className="App">
      <h1>🍽 Food Cuisines</h1>
      <small>
        Checkout my favorite dishes. Select a cuisine to get started
      </small>
      <br />
      <div>
        {Object.keys(cuisineDB).map((item) => (
          <button
            onClick={() => {
              handleClick(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {cuisineDB[cuisine].map((food) => {
            return (
              <div>
                <li>
                  <div style={{ fontSize: "larger" }}>{food.name}</div>
                  <div style={{ fontSize: "smaller" }}>{food.rating}</div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
