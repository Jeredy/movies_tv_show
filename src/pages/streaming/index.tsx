import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviesPage from "./streamingMain/streamingMain.component";

const StreamingIndex: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />} />
    </Routes>
  );
};

export default StreamingIndex;
