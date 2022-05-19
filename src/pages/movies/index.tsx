import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviesAdd from "./moviesAdd/moviesAdd.component";
import MoviesPage from "./moviesMain/movies.page";

const MoviesIndex: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />} />
      <Route path="add-movie" element={<MoviesAdd />} />
    </Routes>
  );
};

export default MoviesIndex;
