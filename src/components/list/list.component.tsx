import React from "react";
import { MoviesProps } from "../../types/movies";
import CardComponent from "../card/card.component";
import { Container, Title, CardContainer } from "./list.styles";

const ListComponent: React.FC<MoviesProps> = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <CardContainer>
        {data.map((item, index) => (
          <CardComponent
            id={item.id}
            name={item.name}
            image={item.image}
            index={index}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default ListComponent;
