import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import Store from "./store/Store";
import { BrowserRouter as Router } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
