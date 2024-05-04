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

import Blankpage from "./components/BlankPage/blankpage";
import resetPassword from "./components/ResetPassword/resetPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);

{
  /*const App: React.FC = () => {
  return(
      <BrowserRouter>
      <Router />
      </BrowserRouter>
      
  );
};*/
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
