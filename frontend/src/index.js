import React from "react";
import ReactDOM from "react-dom/client";
import GlobalTheme from "./globalTheme";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "normalize.css";
import "./index.css";
import { UserProvider } from "./contexts/user/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalTheme>
        <UserProvider>
          <App />
        </UserProvider>
      </GlobalTheme>
    </BrowserRouter>
  </React.StrictMode>
);
