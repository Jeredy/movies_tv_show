import React from "react";
import Button from "../button/button.components";
import { useLocation } from "react-router-dom";

import {
  Container,
  Details,
  SubContainer,
  Title,
  Text,
  TopMenu,
  About,
  ButtonContainer,
} from "./banner.styles";
import { bannerDataMovies } from "../../mockup/movies";
import { bannerDataTVShows } from "../../mockup/tv_show";
import { StreamingModel } from "../../models/streaming";
import { GeneralContext } from "../../context/generalContext";

const DetailsComponent: React.FC = () => {
  const { categories, setPageDetails } = React.useContext(GeneralContext);
  const location = useLocation();
  const currentPage =
    location.pathname.search("movies") > -1 ? "Movies" : "TV Shows";
  const [data, setData] = React.useState<StreamingModel>();

  React.useEffect(() => {
    const newData =
      currentPage === "Movies" ? bannerDataMovies : bannerDataTVShows;

    setData(newData);
  });

  return (
    <Container className="menu" image={data?.image!}>
      <TopMenu>
        <Text>{currentPage}</Text>
      </TopMenu>
      <SubContainer>
        <Title>{data?.name}</Title>
        <Details>
          <Text>{data?.year}</Text>
          <Text>{data?.duration}</Text>
          <Text>
            {
              categories[
                categories.findIndex(
                  (categoria) => categoria.id === data?.category
                )
              ]?.title
            }
          </Text>
        </Details>
        <About>{data?.description}</About>
        <ButtonContainer
          onClick={() =>
            setPageDetails?.({
              action: "streamingDetail",
              route: currentPage,
              id: data?.id,
            })
          }
        >
          <Button title="Assista já!" />
        </ButtonContainer>
      </SubContainer>
    </Container>
  );
};

export default DetailsComponent;
