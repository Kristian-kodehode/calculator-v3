import React, { useState } from "react";
import Calculator from "./Calculator";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="page page2">
      {/* <h1>Calculator</h1> */}
      <div className="modeswitch-container">
        <div className="checkbox-container">
          <label htmlFor="themeselector">Mode</label>
          <input
            type="checkbox"
            className="themeselector"
            checked={darkMode}
            onChange={handleToggle}
          />
          <Calculator darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
