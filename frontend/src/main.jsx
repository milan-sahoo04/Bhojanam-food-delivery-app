import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoeContextProvider from "./context/StoreContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoeContextProvider>
      <App />
    </StoeContextProvider>
  </BrowserRouter>
);
