import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  Routes,
  RouteProps,
  Redirect,
  useLocation,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

import Login from "./components/Login/login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />


      </Routes>
    </BrowserRouter>
  );
}
