import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import PatientData from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Patient Name..." data={PatientData} />
    </div>
  );
}

export default App;