import React from "react";
import ListComponent from "../../components/list/list.component";
import { moviesData } from "../../mockup/movies";
import { Container } from "./list.styles";

const ListPage: React.FC = () => {
  return (
    <Container>
      {moviesData.map(({ title, data }) => (
        <ListComponent title={title} data={data} />
      ))}
    </Container>
  );
};

export default ListPage;
