import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { backgroundColor } from "./theme/theme";
import CheckoutForm from "./components/forms/CheckoutForm";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${backgroundColor};
    color: black;
  }
`;

function App() {
  const [mode, setMode] = useState("light");

  const handleChangeTheme = () => {
    setMode((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  return (
    <>
      <ThemeProvider theme={{ mode: mode }}>
        <GlobalStyle />
        <CheckoutForm handleChangeTheme={handleChangeTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
