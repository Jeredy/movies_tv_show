import React from "react";
import DetailsComponent from "../../components/details/details.component";

import {
  Container,
  Title,
  SubContainer,
  FirstMenu,
  SecondMenu,
} from "./movies.styles";

const DashboardPage: React.FC = () => {
  return (
    <Container>
      <DetailsComponent />
      <SubContainer></SubContainer>
    </Container>
  );
};

export default DashboardPage;
