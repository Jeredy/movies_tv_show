import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { AcessAuth, RequireAuth } from "./auth/RouteAuth";
import { AuthProvider } from "./context/authContext";
import { GeneralProvider } from "./context/generalContext";

import GlobalStyles from "./GlobalStyles";
import Signin from "./components/auth/signIn/signIn.component";
import HomePage from "./pages/home/home.page";

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <GeneralProvider>
        <GlobalStyles />
        <Routes>
          {/* <Route
            path="/"
            element={
              <AcessAuth>
                <Signin />
              </AcessAuth>
            }
          /> */}
          <Route
            path="/*"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
        </Routes>
      </GeneralProvider>
    </AuthProvider>
  );
};

export default App;
