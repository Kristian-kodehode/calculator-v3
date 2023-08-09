import React, { useState } from "react";
import Calculator from "./Calculator";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="page ">
      <Calculator darkMode={darkMode} />
    </div>
  );
}

export default App;

{
  /* <div className="checkbox-container">
        <label htmlFor="myCheckbox">Mode</label>
        <input
          id="myCheckbox"
          type="checkbox"
          className="themeselector"
          checked={darkMode}
          onChange={handleToggle}
        />
      </div> */
}
