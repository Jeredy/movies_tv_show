import React from "react";
import ListComponent from "../../components/list/list.component";
import { GeneralContext } from "../../context/generalContext";
import { Container } from "./list.styles";

const ListPage: React.FC = () => {
  const { movies } = React.useContext(GeneralContext);

  return (
    <Container>
      {movies.map(({ id, title, data }) => (
        <ListComponent id={id} title={title} data={data} />
      ))}
    </Container>
  );
};

export default ListPage;
