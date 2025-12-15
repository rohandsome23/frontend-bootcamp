import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import "../src/components/";
// import "../src/index.css";
// /Users/rohanchandthakuri/frontend-bootcamp/my-portfolio/day_one/src/index.css

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
