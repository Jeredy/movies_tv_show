import React from "react";
import ListComponent from "../../components/list/list.component";
import { Container } from "./list.styles";

const ListPage: React.FC<any> = ({ data }) => {
  return (
    <Container>
      {data?.map((element: any, index: number) => (
        <ListComponent title={element.title} data={element.data} />
      ))}
    </Container>
  );
};

export default ListPage;
