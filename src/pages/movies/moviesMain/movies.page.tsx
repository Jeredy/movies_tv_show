import React from "react";
import DetailsComponent from "../../../components/details/details.component";
import ListPage from "../../list/list.component";

import { Container, SubContainer } from "./movies.styles";

const DashboardPage: React.FC = () => {
  return (
    <Container>
      <DetailsComponent />
      <ListPage />
      <SubContainer></SubContainer>
    </Container>
  );
};

export default DashboardPage;
