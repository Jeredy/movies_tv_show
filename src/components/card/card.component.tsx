import React from "react";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../../context/generalContext";
import { CardProps } from "../../types/card";
import { Container, CardContainer, Image, Text } from "./card.styles";

const CardComponent: React.FC<CardProps> = ({ id, name, image, index }) => {
  const { setPageDetails } = React.useContext(GeneralContext);

  return (
    <Container
      index={index}
      onClick={() =>
        setPageDetails?.({
          route: "movieDetail",
          id,
        })
      }
    >
      <CardContainer index={index}>
        <Image src={image} />
      </CardContainer>
      <Text>{name}</Text>
    </Container>
  );
};

export default CardComponent;
