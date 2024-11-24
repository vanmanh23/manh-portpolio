import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import AllProjects from "./page/AllProjects";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/all-projects" element={<AllProjects />} />
    </Routes>
  </BrowserRouter>
);