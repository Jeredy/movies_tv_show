import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { Context } from "../context/authContext";
import { AuthProps } from "../types/auth";

const RequireAuth: React.FC<AuthProps> = ({ children }) => {
  // const auth = React.useContext(Context);
  // const location = useLocation();

  // if (!auth.authenticated) {
  // 	return <Navigate to="/" state={{ from: location }} replace />;
  // }

  return children;
};

const AcessAuth: React.FC<AuthProps> = ({ children }) => {
  // const auth = React.useContext(Context);
  // const location = useLocation();

  // if (auth.authenticated) {
  // 	return <Navigate to="/home" state={{ from: location }} replace />;
  // }

  return children;
};

export { AcessAuth, RequireAuth };
