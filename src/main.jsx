import React from "react";
import ReactDOM from "react-dom/client"; // ✅ React 18 import
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
//import reportWebVitals from './reportWebVitals';

// ✅ Create root with React 18 API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

//reportWebVitals();
