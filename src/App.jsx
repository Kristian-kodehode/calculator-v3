import React, { useState } from "react";
import Calculator from "./Calculator";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="app">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
