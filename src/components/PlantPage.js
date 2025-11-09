import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

//using plants as a prop in this page
function PlantPage({ plants, onAddPlant, onToggleStock }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering plants
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={filteredPlants} onToggleStock={onToggleStock} />
    </main>
  );
}

export default PlantPage;
