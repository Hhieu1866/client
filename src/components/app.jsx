import React from "react";
import {
  App,
  ZMPRouter,
  AnimationRoutes,
  SnackbarProvider,
  Route,
} from "zmp-ui";
import HomePage from "../pages";
import Login from "../pages/Login";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";
import Employees from "../pages/employess/employees";
import AdminDashboard from "../pages/AdminDashboard";

const MyApp = () => {
  return (
    <App>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            {/* <Route
              path="/"
              element={<Navigate to="/admin-dashboard" />}
            ></Route> */}
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/admin-dashboard"
              element={<AdminDashboard />}
            ></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/form" element={<Form></Form>}></Route>
            <Route path="/user" element={<User></User>}></Route>
            <Route path="/employees" element={<Employees />}></Route>
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};
export default MyApp;
