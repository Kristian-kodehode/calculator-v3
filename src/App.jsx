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
      <label>
        Theme selector
        <input type="checkbox" checked={darkMode} onChange={handleToggle} />
      </label>
      <Calculator darkMode={darkMode} />
    </div>
  );
}

export default App;
