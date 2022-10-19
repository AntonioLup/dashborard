import React from "react";
import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../App";
const useAuth = () => {
  const ctx = useContext(UserContext);
  console.log(ctx);

  const { user } = ctx;
  console.log(user);
  return user && user.loggedIn;
};
const ProtectedRoute = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};

export default ProtectedRoute;
