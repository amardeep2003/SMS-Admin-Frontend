// import React from "react";
// import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// import { AuthProvider } from "./context/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Toaster position="top-right" />
      <App />
      {/* </AuthProvider> */}
    </BrowserRouter>
  </StrictMode>,
);
