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
      <div className="">
        <div className="checkbox-container">
          <input
            type="checkbox"
            className="themeselector"
            checked={darkMode}
            onChange={handleToggle}
          />
        </div>
        <Calculator darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
