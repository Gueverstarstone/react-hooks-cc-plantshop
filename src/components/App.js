import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //a function that updates state and can also POST to the server
  function handleAddPlant(newPlant) {
    setData([...data, newPlant]);
  }

  function handleToggleStock(plantId, newStock) {
    fetch(`http://localhost:6001/plants/${plantId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inStock: newStock }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        // Update local state
        setData(
          data.map((plant) =>
            plant.id === updatedPlant.id ? updatedPlant : plant
          )
        );
      });
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={data}
        onAddPlant={handleAddPlant}
        onToggleStock={handleToggleStock}
      />
    </div>
  );
}

export default App;
