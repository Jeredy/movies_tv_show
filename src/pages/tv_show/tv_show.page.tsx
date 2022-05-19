import React from "react";
import DetailsComponent from "../../components/details/details.component";
import ListPage from "../list/list.component";

import { Container, SubContainer } from "./tv_show.styles";

const TVShowPage: React.FC = () => {
  return (
    <Container>
      <DetailsComponent />
      <ListPage />
      <SubContainer></SubContainer>
    </Container>
  );
};

export default TVShowPage;
