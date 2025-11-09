import React, { useState } from "react";

function PlantCard({ plant, onToggleStock }) {
  // Start from the plant's current stock state
  const [inStock, setInStock] = useState(
    plant.inStock !== undefined ? plant.inStock : true
  );

  function handleClick() {
    const newStock = !inStock;
    setInStock(newStock);
    onToggleStock(plant.id, newStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className={inStock ? "primary" : ""} onClick={handleClick}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
