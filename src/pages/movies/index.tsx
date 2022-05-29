import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./moviesDetail/moviesDetails.page";
import MoviesPage from "./moviesMain/movies.page";

const MoviesIndex: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />} />
    </Routes>
  );
};

export default MoviesIndex;
