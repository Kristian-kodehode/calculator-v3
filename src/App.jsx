import React, { useState } from "react";
import Calculator from "./Calculator";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div>
      <h1>Calculator</h1>
      <label className="themeselector">
        Theme selector
        <input
          type="checkbox"
          className="checkmark"
          checked={darkMode}
          onChange={handleToggle}
        />
      </label>
      <div className="container">
        <Calculator darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
