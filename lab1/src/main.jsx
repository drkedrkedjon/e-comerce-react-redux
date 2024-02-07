import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import UserProvider from "./contextos/UserContext.jsx";
import RutasProvider from "./contextos/RutasContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RutasProvider>
        <App />
      </RutasProvider>
    </UserProvider>
  </React.StrictMode>
);
