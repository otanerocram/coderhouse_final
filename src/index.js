import React from "react";
import ReactDOM from "react-dom";
import CartContextProvider from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";
import { positions, Provider as AlertProvider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const options = {
  timeout: 5000,
  position: positions.MIDDLE,
  transition: transitions.SCALE,
  type: "info",
  containerStyle: {
    zIndex: 99999,
  },
};

ReactDOM.render(
  <CartContextProvider>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </CartContextProvider>,
  document.getElementById("root")
);
