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
import ResetPassword from "./components/ResetPassword/resetPassword";
import CreateAccount from "./components/CreateAccount/createAccount";
import Blankpage from "./components/BlankPage/blankpage";
import Dashboard from "./components/Dashboard/dashboard";
import Reroute from "./components/BlankPage/reroute";
import CompleteAccount from "./components/CompleteAccount/completeAccount";
import RosterPage from "./components/MyRoster/myRoster";
import ThankYouPage from "./components/LandingPage/ThankYouPage";
import AdminInitial from "./components/AdminInitial/adminInitial";
import AdminEvent from "./components/AdminEvent/adminEvent";
import AdminRoster from "./components/AdminRoster/adminRoster";
import ManageOutreach from "./components/ManageOutreach/manageOutreach";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/completeAccount" element={<CompleteAccount />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/adminInitial" element={<AdminInitial />} />
        <Route path="/adminRoster" element={<AdminRoster />} />
        <Route path="/adminEvent" element={<AdminEvent />} />
        <Route path="/Dashboard/" element={<Dashboard />}>
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="Main" element={<Dashboard />} />
          <Route path="Events" element={<Blankpage />} />
          <Route path="MyRoster" element={<RosterPage />} />
          <Route path="Impact" component={<Dashboard />} />
          <Route path="ShareStory" element={<Dashboard />} />
          <Route path="Donate" element={<Dashboard />} />
          <Route path="Resources" element={<Dashboard />} />
          <Route path="Management" element={<Dashboard />} />
          <Route path="ManageOutreach" element={<ManageOutreach />} />
        </Route>
        {/* <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/Events" element={<Blankpage />} />
        <Route path="/Dashboard/Impact" element={<Blankpage />} />
        <Route path="/Dashboard/ShareStory" element={<Blankpage />} />
        <Route path="/Dashboard/Donate" element={<Blankpage />} />
        <Route path="/Dashboard/Resources" element={<Blankpage />} />
        <Route path="/Dashboard/Management" element={<Blankpage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
