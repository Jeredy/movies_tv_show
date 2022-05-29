import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/authContext";
import { AuthProps } from "../types/auth";

const RequireAuth: React.FC<AuthProps> = ({ children }) => {
  //   const { authenticated } = React.useContext(AuthContext);
  //   const location = useLocation();

  //   if (!authenticated) {
  //     return <Navigate to="/authentication" state={{ from: location }} replace />;
  //   }

  return children;
};

const AcessAuth: React.FC<AuthProps> = ({ children }) => {
  //   const { authenticated } = React.useContext(AuthContext);
  //   const navigate = useNavigate();

  //   if (authenticated) {
  //     navigate(-1);
  //   }

  return children;
};

export { AcessAuth, RequireAuth };
