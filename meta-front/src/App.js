import React from "react";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Routes/Router";
import { ThemeProvider } from "@mui/material";
import Theme from "./Constants/Theme";
import GlobalState from "./context/GlobalState";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalState>
        <GlobalStyled />
        <Router />
      </GlobalState>
    </ThemeProvider>
  )
}

export default App;
