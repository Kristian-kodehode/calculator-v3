import React, { useState } from "react";
// import styled, { ThemeProvider } from "styled-components";

// Define the light and dark themes
const lightTheme = {
  background: "#ffffff",
  color: "#333333",
};

const darkTheme = {
  background: "#333333",
  color: "#ffffff",
};

const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  background: ${(props) => (props.isOn ? "#41B883" : "#B8C2CC")};
  position: relative;
  outline: none;
  transition: background 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    transform: ${(props) =>
      props.isOn ? "translateX(20px)" : "translateX(0)"};
    transition: transform 0.3s ease;
  }
`;

const DarkLightModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ToggleLabel>
        <ToggleCheckbox isOn={isDarkMode} onChange={handleToggle} />
      </ToggleLabel>
    </ThemeProvider>
  );
};

export default DarkLightModeToggle;
