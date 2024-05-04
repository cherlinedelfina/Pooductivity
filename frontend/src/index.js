import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  Routes,
  RouteProps,
  Redirect,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);


reportWebVitals();
