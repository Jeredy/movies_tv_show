import React from "react";
import { GeneralContext } from "../../context/generalContext";
import MoviesAdd from "../movies/moviesAdd/moviesAdd.component";
import MovieDetailPage from "../movies/moviesDetail/moviesDetails.page";

const DetailsPageModal: React.FC = () => {
  const { pageDetails } = React.useContext(GeneralContext);

  /* eslint-disable */
  switch (pageDetails?.route) {
    case "addMovie":
      return <MoviesAdd />;
    case "movieDetail":
      return <MovieDetailPage />;
    default:
      return <></>;
  }
  /* eslint-enable */
};

export default DetailsPageModal;
