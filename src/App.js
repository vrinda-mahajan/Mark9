import { useState } from "react";
import "./styles.css";
var cuisineDB = {
  Indian: [
    {
      name: "Kichidi",
      description: "amalgamation of lentils, rice, ghee and vegetables.",
      rating: "4.5/5"
    },
    {
      name: "Biryani",
      description:
        "a mixed rice dish originating among the Muslims of the Indian subcontinent",
      rating: "4/5"
    },
    {
      name: "Bhendi",
      description: "Bhendi (okra) is a common vegetable in India.",
      rating: "5/5"
    }
  ],
  Chinese: [
    {
      name: "Dim sum",
      description: "small plates of dumplings and other snack dishes",
      rating: "5/5"
    },
    {
      name: "Noodles",
      description: "a cooked egg-and-flour paste",
      rating: "4.5/5"
    },
    {
      name: "Manchurian",
      description: "balls of vegetables dipped in sauce",
      rating: "4/5"
    }
  ],
  Italian: [
    {
      name: "Pizza",
      description:
        "a flattened disk of bread dough topped with vegies and cheese",
      rating: "3.5/5"
    },
    {
      name: "Pasta",
      description:
        "made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled.",
      rating: "4/5"
    },
    {
      name: "Spaghetti",
      description: "long, thin, solid, cylindrical pasta.",
      rating: "4/5"
    }
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
            className="btn"
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
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "1rem",
                      fontSize: "larger"
                    }}
                  >
                    {food.name}
                  </div>
                  <div style={{ padding: "0.5rem", fontSize: "small" }}>
                    {food.description}
                  </div>
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
