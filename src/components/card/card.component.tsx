import React from "react";
import { CardProps } from "../../types/card";
import { Container, CardContainer, Image, Text } from "./card.styles";

const CardComponent: React.FC<CardProps> = ({ name, image, year, index }) => {
  return (
    <Container index={index}>
      <CardContainer index={index}>
        <Image src={image} />
      </CardContainer>
      <Text>{name}</Text>
    </Container>
  );
};

export default CardComponent;
