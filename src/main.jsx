import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css'
// import "../src/components/";
// /Users/rohanchandthakuri/frontend-bootcamp/my-portfolio/day_one/src/index.css

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
