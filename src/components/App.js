import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  return (
    <div className="app">
      <Header />
      <PlantPage plants={data}/>
    </div>
  );
}

export default App;
