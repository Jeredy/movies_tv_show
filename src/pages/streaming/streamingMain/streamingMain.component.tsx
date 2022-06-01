import React from "react";
import { useLocation } from "react-router-dom";
import DetailsComponent from "../../../components/details/details.component";
import { GeneralContext } from "../../../context/generalContext";
import { categoryData } from "../../../mockup/category";
import { MoviesProps } from "../../../types/streaming";
import ListPage from "../../list/list.component";

import { Container } from "./streamingMain.styles";

const StreamingMain: React.FC = () => {
  const state = React.useContext(GeneralContext);
  const location = useLocation();

  const [data, setData] = React.useState<MoviesProps>();

  React.useEffect(() => {
    const elementsData: any = [];
    const currentData =
      location.pathname.search("movies") > -1 ? state.movies : state.tvShows;

    categoryData.map((category) => {
      const innerData: any = [];

      currentData?.forEach((streaming, index) => {
        if (streaming.category === category.id) {
          innerData.push(streaming);
        }
      });
      if (innerData.length) {
        elementsData.push({
          title: category.title,
          data: innerData,
        });
      }
    });

    setData(elementsData);
  }, [state, location]);

  return (
    <Container>
      <DetailsComponent />
      <ListPage data={data} />
    </Container>
  );
};

export default StreamingMain;
