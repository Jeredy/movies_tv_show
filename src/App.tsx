import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { GeneralProvider } from "./context/generalContext";

import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/home/home.page";

export const App: React.FC = () => {
  return (
    <GeneralProvider>
      <GlobalStyles />
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </GeneralProvider>
  );
};

export default App;
