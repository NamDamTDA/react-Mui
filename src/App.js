import React from "react";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./theme";
import MainRoutes from "./routes/routes";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </div>
  );
};

export default App;
