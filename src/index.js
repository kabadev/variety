import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./config/axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthContextProvider>
  </BrowserRouter>
);
